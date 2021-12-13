import * as React from 'react';
import Isotype from './Isotype'
import { 
    Paper,
    Box,
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useRouter } from 'next/router'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import EventIcon from '@mui/icons-material/Event';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ForumIcon from '@mui/icons-material/Forum';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

export default function MobileBottomBar({ children, variant }) {
    const theme = useTheme()
    const router = useRouter();
    const account = false; // todo

    if(variant === 'simple' && !children) {
        return null;
    }

    const pathnameSplit = router.pathname.split('/')
    const appSection = pathnameSplit[1];
    if(appSection == 'transparencia' || appSection == 'manuales') {
        appSection = ''
    }
    // '#f1fdf4'

    return (
        <>
        <Box height='110px'></Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: theme.palette.bg.main }} elevation={0}>
            {children}
            { variant !== 'simple' &&
            <BottomNavigation
                showLabels={false}
                value={appSection}
                sx={{ backgroundColor: 'transparent' }}
                onChange={(_, value)=> router.push({ pathname: `/${value}`, query: router.query})}
            >
                <BottomNavigationAction disableRipple value={''} icon={<Isotype variant={appSection == '' ? 'default' : 'outline'}
                    color={appSection == '' ? theme.palette.primary.main : theme.palette.text.secondary} />} />
                <BottomNavigationAction disableRipple value={'tertulia'} icon={appSection == 'tertulia' ? <ForumIcon /> : <ForumOutlinedIcon />} />
                <BottomNavigationAction disableRipple value={'votaciones'} icon={appSection == 'votaciones' ? <HowToVoteIcon /> : <HowToVoteOutlinedIcon />} />
                <BottomNavigationAction disableRipple value={'calendario'} icon={appSection == 'calendario' ? <EventIcon /> : <EventOutlinedIcon />} />
                <BottomNavigationAction disableRipple value={account ? 'yo' : 'auth'} icon={<AccountCircleOutlinedIcon />} />
            </BottomNavigation>
            }
        </Paper>
        </>
    );
}