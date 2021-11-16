import { useEffect  } from "react"
import { 
  Typography,
  Toolbar,
  Container,
  Paper,
  Button,
  Tab
} from "@mui/material"
import Layout from "../components/Layout"
import Tabs from "../components/SDCLMobileTab2"

function Calendario() {

  return (
    <Container>
      <Typography variant="h1" sx={{textAlign: 'center'}}>Calendario SDCL</Typography>
      <Typography variant="caption" sx={{textAlign: 'center'}}>Lugar y hora en donde reunirnos</Typography>
      <Toolbar sx={{ position: 'sticky', top: 0, background: '#FFF' }}>
        <Button>Todos mis grupos</Button>
      </Toolbar>
    </Container>
  )
}

Calendario.getLayout = (page) =>
  <Layout
    title="Calendario"
    tabs={<Tabs />}
  >
    {page}
  </Layout>

export default Calendario;