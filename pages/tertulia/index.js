import React, { useEffect, useRef, useState  } from "react"
import { 
  Typography,
  Paper,
  Container,
  Card,
  CardContent,
  Button,
  Toolbar,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider
} from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CreateIcon from '@mui/icons-material/Create';

//import Masonry from '../../components/Masonry'
import Layout from "../../components/Layout"
import Masonry from "@mui/lab/Masonry"
import Tabs from "../../components/SDCLMobileTab2"
import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'

import { Virtuoso } from 'react-virtuoso'

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const mockSpaces = [['Todos', '#F3FFFF'], ['Nacional', '#f5c8c3'], ['Mi Regional', '#e6c9a8'], ['Mi Comunal', '#fff475'], ['Apoderados Jardin Principito', '#ccff90']].map((item, id) => ({
   id: `space-${id}`,
   name: item[0],
   color: item[1]
}))

function Home() {
  const { data, error } = useSWR('/api/app/mural', fetcher)

  const [spaceSelectedId, setSpaceSelectedId] = useState(0);

  const handleSpaceSelect = (event, value) => {
    console.log('handleSpaceSelect', event.target, value)
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Cargando...</div>

  return (
    <>
    <Container sx={{ pr: 0 }}>
      <Typography variant="h1" sx={{textAlign: 'center', mt: 2 }}>Tertulia</Typography>

      {false && <Box
      marginTop={3}
      marginBottom={4}
      textAlign='center'
      >
        {mockSpaces.map(item => 
        <Chip key={item.id} label={item.name} sx={{m:.5}} sx={{  backgroundColor: item.id == spaceSelectedId ? item.color: 'inherit'}}
        variant={spaceSelectedId != item.id ? 'outlined' : ''}
        onClick={handleSpaceSelect} />
        )}
      </Box>}

      <Typography>#elecciones #directiva #fraudeFernando #idea</Typography>

      <Paper sx={{ position: 'fixed', bottom: 110, right: 10, backgroundColor: '#c3ffe7', zIndex: 10 }} elevation={1}>
        <Button variant="container" sx={{textTransform: 'none'}} startIcon={<CreateIcon />} size={'large'}>Agregar</Button>
      </Paper>
      </Container>

      <List>
      <Virtuoso useWindowScroll _style={{ height: '400px' }} data={data} itemContent={(index, item) => {
        return <Link href={`/tertulia/${item.id}_${item.title}`}>
      <ListItem alignItems="flex-start" sx={{ borderLeftWidth: '5px', borderLeftStyle: 'solid', borderLeftColor: item.color }}>
        <ListItemAvatar>
          <Avatar alt={item.user_name} src={item.user_pic} />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{ sx: { fontWeight: 500 } }}
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.group}
              </Typography>
              {" — " + item.abstract}
              { item.image && <Box>
                <img src={item.image} height="50" />
              </Box>}
            </React.Fragment>
          }
        />
      </ListItem>
        </Link>
      }} />
      </List>

    </>
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
 
 */