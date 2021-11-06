import { useEffect  } from "react"
import { Typography } from "@mui/material"
import Layout from "../components/Layout"


function Home() {

  return (
    <div >
      <Typography variant="h1">Socialdemócratas de Chile</Typography>
    </div>
  )
}

Home.getLayout = (page) =>
  <Layout title="Socialdemócratas de Chile">
    {page}
  </Layout>

export default Home;