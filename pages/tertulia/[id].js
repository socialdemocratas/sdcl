import { useEffect  } from "react"
import { Typography } from "@mui/material"
import Layout from "../../components/Layout"
import Tabs from "../../components/HomeMobileTabs"

function Home({ id, title, group, abstract, image, user_pic }) {

  return (
    <div >
      <Typography variant="h1">{title}</Typography>
      {image && <img src={image} style={{width:'100%'}} />}
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

import data from '../../etc/publicacionesMock'
export async function getServerSideProps({ params: { id } }) {

  id = id.split('_')[0]
  const item = data.filter((item) => item.id == id)[0]

  return {
    props: item, // will be passed to the page component as props
  }
}