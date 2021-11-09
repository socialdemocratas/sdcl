import { useEffect, useRef, useState  } from "react"
import { 
  Typography,
  Paper,
  Box
} from "@mui/material"
import Layout from "../../components/Layout"
import Tabs from "../../components/SDCLMobileTabs"
import useSWR from 'swr'

import React from "react";
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from "react-virtualized";
import ImageMeasurer from "../../components/ImageMeasurer";

const fetcher = (...args) => fetch(...args).then(res => res.json())

/////////////////////////////////////////////////////////



// Array of images with captions
//const list = [{image: 'http://...', title: 'Foo'}];

const keyMapper = (item, index) => item.id || index;

const columnWidth = 200;
const defaultHeight = 250;
const defaultWidth = columnWidth;

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
  defaultHeight,
  defaultWidth,
  fixedWidth: true
});

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositionerConfig = {
  cellMeasurerCache: cache,
  columnCount: 2,
  columnWidth,
  spacer: 10
};

const cellPositioner = createMasonryCellPositioner(cellPositionerConfig);

const MasonryComponent = ({ itemsWithSizes, masonryRef }) => {
  const cellRenderer = ({ index, key, parent, style }) => {
    const { item, size } = itemsWithSizes[index];
    console.log('{ item, size }', { item, size })
    const height = !!size && columnWidth * (size.height / size.width) || defaultHeight;
    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
        <div style={style}>
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="body1">{item.abstract}</Typography>
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              style={{
                height: height,
                width: columnWidth,
                display: "block"
              }}
            />
          )}
        </div>
      </CellMeasurer>
    );
  };

  return (
    <Masonry
      cellCount={itemsWithSizes.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={600}
      width={500}
      keyMapper={keyMapper}
      ref={masonryRef}
    />
  );
};

class Index extends React.Component {
  state = { images: noCacheList };

  masonryRef = null;

  // this shows how to significantly change the input array, if items will be only appended this recalculation is not needed
  shorten = () => {
    cache.clearAll();
    cellPositioner.reset(cellPositionerConfig);
    this.masonryRef.clearCellPositions();
    this.setState({ images: [...this.state.images.slice(1)] });
  };

  setMasonry = node => (this.masonryRef = node);

  render() {
    return (
      <div>
        <button onClick={this.shorten}>Resize</button>
        <ImageMeasurer
          items={this.state.images}
          image={item => item.image}
          keyMapper={keyMapper}
          onError={(error, item, src) => {
            console.error(
              "Cannot load image",
              src,
              "for item",
              item,
              "error",
              error
            );
          }}
          defaultHeight={defaultHeight}
          defaultWidth={defaultWidth}
        >
          {({ itemsWithSizes }) => (
            <MasonryComponent
              setRef={this.setMasonry}
              itemsWithSizes={itemsWithSizes}
            />
          )}
        </ImageMeasurer>
      </div>
    );
  }
}
/////////////////////////////////////////////////////////

function Home() {
  const masonryRef = useRef(null);
  const { data, error } = useSWR('/api/app/mural', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Cargando...</div>

  return (
    <div >
      <Typography variant="h1">Mural SD</Typography>
      <ImageMeasurer
          items={data}
          image={item => item.image}
          keyMapper={keyMapper}
          onError={(error, item, src) => {
            console.error(
              "Cannot load image",
              src,
              "for item",
              item,
              "error",
              error
            );
          }}
          defaultHeight={defaultHeight}
          defaultWidth={defaultWidth}
        >
          {({ itemsWithSizes }) => (
            <MasonryComponent
              masonryRef={masonryRef}
              itemsWithSizes={itemsWithSizes}
            />
          )}
        </ImageMeasurer>
    </div>
  )
}

Home.getLayout = (page) =>
  <Layout
    title="Grupos | Mural"
    tabs={<Tabs />}
  >
    {page}
  </Layout>

export default Home;

/**
 <Masonry columns={2} spacing={2}>
        {data.map(item => (
          <Paper key={item.id}>
            <Typography>{item.title}</Typography>
            <Typography>{item.abstract}</Typography>
          </Paper>
        ))}
      </Masonry>
 */