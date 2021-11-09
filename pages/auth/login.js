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

function Login() {

  return (
    <Container>
      <Typography variant="h1">Iniciar sesión</Typography>
      
    </Container>
  )
}

Login.getLayout = (page) =>
  <Layout 
    title="Iniciar sesión"
    tabs={<Tabs />}
    sx={{ marginBottom: '108px' }}
  >
    {page}
  </Layout>

export default Login;