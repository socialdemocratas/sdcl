import { useState  } from "react"
import { Typography } from "@mui/material"
import Layout from "../../components/Layout"
import Tabs from "../../components/AccountUnloggedMobileTabs"

import {
  Container,
  Card,
  CardContent,
  Stack,
  Button,
  Box,
  Radio
} from "@mui/material"

function Home() {

  const [option, setOption] = useState();

  const handleChangeOption = (event) => {
    setOption(event.target.value)
  }

  return (
    <Container>
      <Typography variant="h1">Socialdemócratas de Chile</Typography>
      <Stack spacing={2}>

        <Card variant="outlined">
          <CardContent>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Radio
              checked={option === 'socialdemocrata_militante'}
              onChange={handleChangeOption}
              value="socialdemocrata_militante"
              name="create_account_option"
              inputProps={{ 'aria-label': 'Como Socialdemocrata Militante' }}
            />
            <Typography variant="h6">Como socialdemócrata militante</Typography>
          </Box>
          <Typography>Sé parte de nuestro partido</Typography>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Radio
              checked={option === 'socialdemocrata_no_militante'}
              onChange={handleChangeOption}
              value="socialdemocrata_no_militante"
              name="create_account_option"
              inputProps={{ 'aria-label': 'Como Socialdemocrata NO Militante' }}
            />
            <Typography variant="h6">Como socialdemócrata no militante</Typography>
          </Box>
          <Typography>Declaras ser socialdemócrata pero no deseas ser parte de nuestro partido</Typography>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Radio
                checked={option === 'solo_crear_cuenta'}
                onChange={handleChangeOption}
                value="solo_crear_cuenta"
                name="create_account_option"
                inputProps={{ 'aria-label': 'Solo crear cuenta' }}
              />
              <Typography variant="h6">Solo crear una cuenta</Typography>
            </Box>
            <Typography>No declaras tu afinidad política a la socialdemocracia, solo necesitas crear una cuenta para usar los servicios del sitio</Typography>
          </CardContent>
        </Card>

        <Button>Continuar</Button>

      </Stack>

    </Container>
  )
}

Home.getLayout = (page) =>
  <Layout 
    title="Unirme"
    tabs={<Tabs />}
  >
    {page}
  </Layout>

export default Home;