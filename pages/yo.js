import { useEffect  } from "react"
import { Typography } from "@mui/material"
import Layout from "../components/Layout"
import Tabs from "../components/AccountLoggedMobileTabs"

function Home() {

  return (
    <div >
      <Typography variant="h1">Mi cuenta</Typography>
    </div>
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