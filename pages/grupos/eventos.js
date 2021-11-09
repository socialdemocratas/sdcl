import { useEffect  } from "react"
import { 
  Typography,
  Toolbar,
  Container,
  Paper,
  Button
} from "@mui/material"
import Layout from "../../components/Layout"
import Tabs from "../../components/SDCLMobileTabs"

function Home() {

  return (
    <Container>
      <Typography variant="h1" sx={{textAlign: 'center'}}>Eventos SD</Typography>
      <Typography variant="caption" sx={{textAlign: 'center'}}>Lugar y hora en donde reunirnos</Typography>
      <Toolbar sx={{ position: 'sticky', top: 0, background: '#FFF' }}>
        <Button>Todos mis grupos</Button>
      </Toolbar>
    </Container>
  )
}

Home.getLayout = (page) =>
  <Layout
    title="Grupos | Eventos"
    tabs={<Tabs />}
  >
    {page}
  </Layout>

export default Home;