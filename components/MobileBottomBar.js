import * as React from 'react';
import Isotype from './Isotype'
import { 
    Paper,
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Link from 'next/link'
import { useRouter } from 'next/router'

import { 
    FormatQuoteOpen, 
    FormatQuoteOpenOutline,
    InformationVariant
} from './extraIcons';

export default function MobileBottomBar({ children }) {
    const theme = useTheme()
    const router = useRouter();
    const pathnameSplit = router.pathname.split('/')
    const appSection = pathnameSplit[1];
    console.log('children', children)
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: theme.palette.bg.main }} elevation={1}>
            {children}
            <BottomNavigation
                showLabels={false}
                value={appSection}
                sx={{ backgroundColor: 'transparent' }}
                onChange={(_, value)=> router.push(`/${value}`)}
            >
                <BottomNavigationAction value={'vozsd'} icon={appSection == 'vozsd' ? <FormatQuoteOpen /> : <FormatQuoteOpenOutline />}
                    color={appSection == 'vozsd' ? '#33333' : theme.palette.text.secondary} 
                />
                <BottomNavigationAction value={'grupos'} icon={<Isotype variant={appSection == 'grupos' ? 'default' : 'outline'}
                    color={appSection == 'grupos' ? theme.palette.primary.main : theme.palette.text.secondary} />}
                />
                <BottomNavigationAction value={''} icon={<InformationVariant />} />
            </BottomNavigation>
        </Paper>
    );
}


/**
 {
                value === 'colaboremos' && <>
            <Tabs sx={{
                '& .MuiTabs-indicator': { top: 0, bottom: 'initial'}
            }} value={espacioSection} onChange={(event, newValue) => { setEspacioSection(newValue)}}  aria-label="Menú del espacio seleccionado" centered={true}>
                <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
                    espacioSection != 0 ? <DashboardOutlinedIcon fontSize={'small'} />: <DashboardIcon fontSize={'small'} />
                }<Typography sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Mural</Typography></Box>} />
                <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
                    espacioSection != 1 ? <EventOutlinedIcon fontSize={'small'} /> : <EventIcon fontSize={'small'} /> 
                }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Eventos</Typography></Box>} />
                <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
                    espacioSection != 2 ? <HowToVoteOutlinedIcon fontSize={'small'} /> : <HowToVoteIcon fontSize={'small'} />
                }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Votaciones</Typography></Box>} />
                <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
                espacioSection != '3' ? <StickyNote2OutlinedIcon fontSize={'small'} /> : <StickyNote2Icon fontSize={'small'} />
                }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Tareas</Typography></Box>} />
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
 */