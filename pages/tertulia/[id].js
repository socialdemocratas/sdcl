import { useEffect  } from "react"
import { Button, IconButton, Toolbar, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles'
import Layout from "../../components/Layout"
import Tabs from "../../components/HomeMobileTabs"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useRouter } from 'next/router'

function Home({ id, title, group, abstract, image, user_pic }) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <div>
      <Toolbar sx={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
        <IconButton 
        sx={{ backgroundColor: theme.palette.bg.main }}
        onClick={()=> router.back()}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{flexGrow: 1}}></Typography>
        <IconButton sx={{ backgroundColor: theme.palette.bg.main }}>
          <FavoriteBorderIcon />
        </IconButton>
      </Toolbar>
      {image && <img src={image} style={{width:'100%'}} />}
      <Typography variant="h1">{title}</Typography>
    </div>
  )
}

Home.getLayout = (page) =>
  <Layout 
    title="Socialdemócratas de Chile"
    _tabs={<Tabs />}
    variant={'simple'}
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