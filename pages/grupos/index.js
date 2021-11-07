import { useEffect  } from "react"
import { 
  Typography,
  Paper
} from "@mui/material"
import Masonry from '@mui/lab/Masonry'
import Layout from "../../components/Layout"
import Tabs from "../../components/SDCLMobileTabs"
import useSWR from 'swr'


import {AutoSizer, Table} from 'react-virtualized'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Home() {

  const { data, error } = useSWR('/api/app/mural', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Cargando...</div>

  return (
    <div >
      <Typography variant="h1">Mural SD</Typography>
      <AutoSizer>
  {({ height, width }) => (
    <Table
      headerHeight={30}
      height={height}
      rowCount={2}
      rowGetter={({ index }) => data[index]}
      rowHeight={({ index }) => 50}
      width={width}
    >
    </Table>
  )}
</AutoSizer>

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