import { useEffect, useRef, useState  } from "react"
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
  ListItem
} from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CreateIcon from '@mui/icons-material/Create';

//import Masonry from '../../components/Masonry'
import Layout from "../../components/Layout"
import Masonry from "@mui/lab/Masonry"
import Tabs from "../../components/SDCLMobileTabs"
import useSWR from 'swr'
import Image from 'next/image'

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
    <Container>
      <Typography variant="h1" sx={{textAlign: 'center', mt: 2 }}>Mural SD</Typography>

      <Box
      marginTop={3}
      marginBottom={4}
      textAlign='center'
      >
      {mockSpaces.map(item => 
      <Chip key={item.id} label={item.name} sx={{m:.5}} sx={{  backgroundColor: item.id == spaceSelectedId ? item.color: 'inherit'}}
      variant={spaceSelectedId != item.id ? 'outlined' : ''}
      onClick={handleSpaceSelect} />
      )}
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 110, right: 10 }} elevation={1}>
        <Button variant="container" sx={{textTransform: 'none'}} startIcon={<CreateIcon />} size={'large'}>Agregar</Button>
      </Paper>
      <Masonry columns={2} spacing={2}>
        {data.map(item => (
          <Paper key={item.id} elevation={0} sx={{background: item.color}}>
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