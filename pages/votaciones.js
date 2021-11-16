import { useEffect  } from "react"
import { 
  Typography,
  Toolbar,
  Container,
  Paper,
  Button 
} from "@mui/material"
import Layout from "../components/Layout"
import Tabs from "../components/SDCLMobileTab2"

function Votaciones() {

  return (
    <Container>
      <Typography variant="h1" sx={{textAlign: 'center'}}>Votaciones</Typography>
      <Typography variant="caption" sx={{textAlign: 'center'}}>Democracia digital</Typography>
      <Toolbar sx={{ position: 'sticky', top: 0 }}>
        <Button>Todos mis grupos</Button>
      </Toolbar>
    </Container>
  )
}

Votaciones.getLayout = (page) =>
  <Layout
    title="Grupos | Votaciones"
    tabs={<Tabs />}
  >
    {page}
  </Layout>

export default Votaciones;