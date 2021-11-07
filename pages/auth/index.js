import { useEffect  } from "react"
import { Typography } from "@mui/material"
import Layout from "../../components/Layout"
import Tabs from "../../components/AccountUnloggedMobileTabs"

function Home() {

  return (
    <div >
      <Typography variant="h1">Socialdemócratas de Chile</Typography>
    </div>
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