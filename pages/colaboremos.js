import { useEffect  } from "react"
import { 
  Typography,
  Toolbar,
  Button,
  Paper
} from "@mui/material"


export default function Home({ setTitle }) {

  setTitle('Socialdemócratas de Chile')

  return (
    <div >
      <Typography variant="h1">Colaboremos :)</Typography>
      <Typography variant="subtitle1">Mural</Typography>
      <Paper elevation={0} sx={{ position: 'sticky', top: 0 }}>
      <Toolbar>
        <Button>Todas mis<br />afiliaciones</Button>
        <Button>Buscar</Button>
      </Toolbar>
      </Paper>
      { [...Array(100).keys()].map((i) => {
            return <p key={i}>Hola, como estay {i}</p>
        }) }
    </div>
  )
}
