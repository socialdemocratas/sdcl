import { useEffect, useState  } from "react"
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import { 
  Typography,
  Box,
  Tabs,
  IconButton,
  Tab
} from "@mui/material"
import { useTheme, styled, darken } from '@mui/material/styles'

import LoginIcon from '@mui/icons-material/Login';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

import {
  BookOpenPageVariant,
  BookOpenPageVariantOutline,
  Abacus,
  AccountPlus,
  AccountPlusOutline
} from './extraIcons'


const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontSize: theme.typography.pxToRem(12),
    textTransform: 'none',
    letterSpacing: 0,
      minHeight: '52px',
      minWidth: 0
  }),
);

export default function Tabs_({ }) {

  const router = useRouter();
  const pathnameSplit = router.pathname.split('/')
  const homeSection = pathnameSplit[2] || "";
  const theme = useTheme();

  const [spacesList, setSpacesLit] = useState([
    'General', 'SDCL', 'Mi Regional', 'Mi Comunal', 'Mi Distrital', 'Mi sindical'
  ])
  const selected = router.query.t || 'General'

  return (
    <>
    <Tabs
      value={selected}
      _textColor={darken(theme.palette.bg.main, 0.8)}
      centered
      variant="scrollable"
      sx={{
        '& .MuiTabs-indicator': {
          top: '10px',
          height: '32px',
          zIndex: -1,
          background: '#c3ffe7',
          borderRadius: '15px'
        },
        '& .Mui-selected': {
          color: darken(theme.palette.bg.main, 0.95)
        }
      }}
      onChange={(_, value)=> {
        Router.push({ query: { t: value } })
      }}
      aria-label="icon position tabs example"
    >
      {spacesList.map(item => <StyledTab key={item} value={item} label={item} />)}
      <StyledTab key='like' value='_megusta' icon={<FavoriteIcon />} />
      <StyledTab key='like' value='_buscar' icon={<SearchIcon />}/>
      <IconButton>
      <ArrowDropUpIcon />
    </IconButton>
    </Tabs>
    
  </>
  )
}


/**
 <Tabs sx={{
      '& .MuiTabs-indicator': { top: 0, bottom: 'initial'}
    }} 
    value={groupsSection}
    aria-label="Menú de mis grupos" 
    centered={true}
    textColor="inherit"
    indicatorColor="secondary"
    >
      <Link href="/grupos">
        <StyledTab name="" label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
            groupsSection != "" ? <DashboardOutlinedIcon fontSize={'small'} />: <DashboardIcon fontSize={'small'} />
        }<Typography sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Mural</Typography></Box>} />
      </Link>
      <Link href="/grupos/eventos">
        <StyledTab name="eventos" label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
            groupsSection != "eventos" ? <EventOutlinedIcon fontSize={'small'} /> : <EventIcon fontSize={'small'} /> 
        }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Eventos</Typography></Box>} />
      </Link>
      <Link name="votaciones" href="/grupos/votaciones">
        <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
            groupsSection != "votaciones" ? <HowToVoteOutlinedIcon fontSize={'small'} /> : <HowToVoteIcon fontSize={'small'} />
        }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Votaciones</Typography></Box>} />
      </Link>
      <Link name="tareas" href="/grupos/tareas">
        <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
        groupsSection != "tareas" ? <StickyNote2OutlinedIcon fontSize={'small'} /> : <StickyNote2Icon fontSize={'small'} />
        }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Tareas</Typography></Box>} />
      </Link>
  </Tabs>
 */