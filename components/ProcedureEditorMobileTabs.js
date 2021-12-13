import { useEffect, useState  } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { 
  Typography,
  Box,
  Toolbar,
  Button,
  Tabs,
  Tab
} from "@mui/material"
import { useTheme, styled, darken } from '@mui/material/styles'


import {
  ScriptText,
  ScriptTextOutline
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
  const theme = useTheme();

  const [selected, setSelected] = useState();

  return (
    <>
    <Tabs
      value={selected}
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
      onChange={(_, value)=> setSelected(value)}
      aria-label="icon position tabs example"
    >
        <StyledTab value="deatails" icon={
            selected != "deatails" ? <ScriptTextOutline fontSize={'small'} />: <ScriptText fontSize={'small'} />
          } iconPosition="start" label="Documentación" />
        <StyledTab value="1" label="A" />
        <StyledTab value="2" label="B" />
        <StyledTab value="3" label="C" />
        <StyledTab value="4" label="D" />
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