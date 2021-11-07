import { useEffect, useState  } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { 
  Typography,
  Box,
  Tabs,
  Tab
} from "@mui/material"
import { useTheme, styled } from '@mui/material/styles'

import LoginIcon from '@mui/icons-material/Login';

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
  const homeSection = pathnameSplit[1] || "";
  const theme = useTheme();

  console.log('groupsSection', )

  return (
    <>
    <Tabs
      value={homeSection}
      centered
      sx={{
        '& .MuiTabs-indicator': {
          top: '10px',
          height: '32px',
          zIndex: -1,
          background: theme.palette.bg.main,
          borderRadius: '50px'
        }
      }}
      onChange={(_, value)=> router.push(`/${value}`)}
      aria-label="icon position tabs example"
    >
        <StyledTab value="" icon={
          homeSection != "" ? <AccountPlusOutline fontSize={'small'} />: <AccountPlus fontSize={'small'} />
        } iconPosition="start" label="Crear cuenta" />
        <StyledTab value="login" icon={<LoginIcon fontSize={'small'} />} 
        iconPosition="start" label="Iniciar Sesión" />
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