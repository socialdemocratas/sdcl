import { useEffect  } from "react"
import { Typography } from "@mui/material"
import Layout from "../components/Layout"

function VozSD() {

  return (
    <div >
      <Typography variant="h1">Voz SD</Typography>
    </div>
  )
}

VozSD.getLayout = (page) =>
  <Layout
    title="Voz SD"
  >
    {page}
  </Layout>

export default VozSD;