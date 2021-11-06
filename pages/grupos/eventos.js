import { useEffect  } from "react"
import { Typography } from "@mui/material"
import Layout from "../../components/Layout"
import Tabs from "../../components/SDCLMobileTabs"

function Home() {

  return (
    <div >
      <Typography variant="h1">Eventos SD</Typography>
    </div>
  )
}

Home.getLayout = (page) =>
  <Layout
    title="Grupos | Eventos"
    tabs={<Tabs />}
  >
    {page}
  </Layout>

export default Home;