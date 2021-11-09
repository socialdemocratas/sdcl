import { useEffect, useRef, useState  } from "react"
import { 
  Typography,
  Paper,
  Container,
  Card,
  CardContent,
  Button,
  Toolbar,
  Box
} from "@mui/material"
//import Masonry from '../../components/Masonry'
import Layout from "../../components/Layout"
import Masonry from "@mui/lab/Masonry"
import Tabs from "../../components/SDCLMobileTabs"
import useSWR from 'swr'
import Image from 'next/image'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Home() {
  const { data, error } = useSWR('/api/app/mural', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Cargando...</div>

  return (
    <Container>
      <Typography variant="h1" sx={{textAlign: 'center'}}>Mural SD</Typography>
      <Typography variant="caption" sx={{textAlign: 'center'}}>Espacio abierto para informarnos</Typography>
      <Paper sx={{ position: 'fixed', bottom: 110, left: -5 }} elevation={1}>
        <Button variant="container" sx={{textTransform: 'none'}}>Todas mis afiliaciones</Button>
      </Paper>
      <Masonry columns={2} spacing={2}>
        {data.map(item => (
          <Paper key={item.id} elevation={0} sx={{background: '#F3FFFF'}}>
            <Box p={.5}>
              <Typography variant="caption">{item.group}</Typography>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">{item.abstract}</Typography>
            </Box>
            {
              item.image && <img style={{width: '100%'}} src={item.image} />
            }
          </Paper>
        ))}
      </Masonry>
    </Container>
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