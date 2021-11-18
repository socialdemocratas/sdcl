import { useEffect  } from "react"
import { Grid, Box, Paper, Stack, Typography, useTheme } from "@mui/material"
import Layout from "../components/Layout"
import Tabs from "../components/HomeMobileTabs"
import Isotype from "../components/Isotype"

function Home() {

  const theme = useTheme()
  const dbColor = theme.palette.bg.main

  return (
    <>
      <Typography variant="h1" sx={{textAlign: 'center', mt: 2 }}>Transparencia</Typography>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid item xs={5}>
          <Paper sx={{ backgroundColor: dbColor, p: 1 }} variant="outlined">
            <Typography variant="subtitle2">Simbolos</Typography>
            <Isotype />
            <Typography variant="caption">SDCL</Typography>
            <Typography variant="subtitle1">Socialdemócratas de Chile</Typography>
            <Typography variant="body1">Historia</Typography>
            <Typography variant="body1">Hoja de ruta</Typography>
          </Paper>
        </Grid>
        <Grid item xs={7}>
        <Paper sx={{ backgroundColor: dbColor }} variant="outlined">
            <Typography variant="subtitle2">Organicas</Typography>
            <Stack>
              <Box>
                <Typography variant="body1">Presidencia</Typography>
                <Typography variant="body1">Cuerpo colegiado</Typography>
                <Typography variant="body1">Tribunal supremo</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">Organicas locales y temáticas</Typography>
                <Typography variant="body1">Regionales<Typography sx={{ flexGrow: 1 }}/>0 (0)</Typography>
                <Typography variant="body1">Distritales</Typography>
                <Typography variant="body1">Comunales</Typography>
                <Typography variant="body1">Otros territoriales</Typography>
                <Typography variant="body1">Otros temáticos</Typography>
                <Typography variant="body1">Sindicatos</Typography>
                <Typography variant="body1">CEALes</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12}>
        <Paper sx={{ backgroundColor: dbColor }} variant="outlined">
            <Typography variant="subtitle2">Miembrxs</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
        <Paper sx={{ backgroundColor: dbColor }} variant="outlined">
            <Typography variant="subtitle2">Contabilidad</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

Home.getLayout = (page) =>
  <Layout 
    title="Socialdemócratas de Chile"
    tabs={<Tabs />}
  >
    {page}
  </Layout>

export default Home;