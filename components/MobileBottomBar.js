import * as React from 'react';

import Isotype from './Isotype'

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditIcon from '@mui/icons-material/Edit';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { 
    Paper,
    Button
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';


import { useRouter } from 'next/router'

import { 
    FormatQuoteOpen, 
    FormatQuoteOpenOutline,
    FileCabinet,
    GraphOutline
} from './extraIcons'


const StyledTab = styled((props) => <Tab {...props} />)(
    ({ theme }) => ({
      //textTransform: 'none',
      //fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(8),
      letterSpacing: 0,
      //minWidth: '50px',
      //marginRight: theme.spacing(1),
      /*color: 'rgba(255, 255, 255, 0.7)',
      '&.Mui-selected': {
        color: '#fff',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },*/
    }),
  );

export default function MobileBottomBar({ }) {
    const theme = useTheme()
    const [value, setValue] = React.useState();
    const router = useRouter();

    const pathnameSplit = router.pathname.split('/')
    const appSection = pathnameSplit[1];
    React.useEffect(() => {
        setValue(appSection);
    }, [appSection])

    const [espacioSection, setEspacioSection] = React.useState(0)

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: theme.palette.bg.main }} elevation={2}>
            {
                value === 'espacios' && <>
            <Tabs sx={{
                '& .MuiTabs-indicator': { top: 0, bottom: 'initial'}
            }} value={espacioSection} onChange={(event, newValue) => { setEspacioSection(newValue)}}  aria-label="Menú del espacio seleccionado" centered={true}>
                <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><DashboardOutlinedIcon fontSize={'small'} /><Typography sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Mural</Typography></Box>} />
                <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><EventOutlinedIcon fontSize={'small'} /><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Eventos</Typography></Box>} />
                <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><HowToVoteOutlinedIcon fontSize={'small'} /><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Votaciones</Typography></Box>} />
                <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><AssessmentOutlinedIcon fontSize={'small'} /><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Info</Typography></Box>} />
              </Tabs>
              </>
            }

            {
                value === 'tramites' && pathnameSplit[2] !== 'visor' &&
                <Tabs sx={{
                    '& .MuiTabs-indicator': { top: 0, bottom: 'initial'}
                }} value={espacioSection} onChange={(event, newValue) => { setEspacioSection(newValue)}}  aria-label="Menú de la central de trámites" centered={true}>
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><FileCabinet fontSize={'small'} /><Typography sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Catálogo</Typography></Box>} />
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><FileDownloadOutlinedIcon fontSize={'small'} /><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Entrantes</Typography></Box>} />
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><FileUploadOutlinedIcon fontSize={'small'} /><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Salients</Typography></Box>} />
                </Tabs>
            }

            {
                value === 'tramites' && pathnameSplit[2] === 'visor' &&
                <Tabs sx={{
                        '& .MuiTabs-indicator': { top: 0, bottom: 'initial'}
                    }} value={espacioSection} 
                    onChange={(event, newValue) => { setEspacioSection(newValue)}}  
                    aria-label="Menú de la central de trámites"
                    variant="scrollable"
                >
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><GraphOutline fontSize={'small'} /><Typography sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> General</Typography></Box>} />
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}>A</Typography></Box>} />
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}>B</Typography></Box>} />
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}>C</Typography></Box>} />
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}>D</Typography></Box>} />
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}>E</Typography></Box>} />
                    <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}><Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}>F</Typography></Box>} />
                </Tabs>
            }

            <BottomNavigation
                showLabels={false}
                value={value}
                sx={{ backgroundColor: theme.palette.bg.main }}
                onChange={(event, newValue) => {
                    router.push(`/${newValue}`)
                }}
            >
                <BottomNavigationAction value={'vozsd'} icon={value == 'vozsd' ? <FormatQuoteOpen /> : <FormatQuoteOpenOutline />} />
                <BottomNavigationAction showLabel={false} sx={{ selected: { color: theme.palette.navSelected.main } }} value={'espacios'} icon={value == 'espacios' ? <WorkspacesIcon /> : <WorkspacesOutlinedIcon />} />
                <BottomNavigationAction value={'tramites'} icon={value == 'tramites' ? <EditIcon /> : <EditOutlinedIcon />} />
                <BottomNavigationAction value={''} icon={<Isotype variant={value == '' ? 'default' : 'outline'}
                    color={value == '' ? theme.palette.primary.main : theme.palette.text.secondary} />} />
            </BottomNavigation>
        </Paper>
    );
}
