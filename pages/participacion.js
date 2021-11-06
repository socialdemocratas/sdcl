import { useEffect, useState  } from "react"
import Head from 'next/head'
import { 
  Typography,
  Toolbar,
  Button,
  Paper,
  Box,
  Tabs,
  Tab
} from "@mui/material"
import { useTheme, styled } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views';
import Masonry from '@mui/lab/Masonry';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import EventIcon from '@mui/icons-material/Event';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import DashboardIcon from '@mui/icons-material/Dashboard';


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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      _hidden={value !== index}
      id={`participacion-vista-${index}`}
      aria-labelledby={`participacion-vista-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

export default function Participacion({ setTitle, setTabs }) {

  setTitle('Socialdemócratas de Chile')
  const theme = useTheme();

  const [tabIndex, setTabIndex] = useState(0);

  const mock = [...Array(50).keys()]

  useEffect(() => {
    setTabs(<Tabs sx={{
        '& .MuiTabs-indicator': { top: 0, bottom: 'initial'}
      }} 
      value={tabIndex} 
      onChange={(_, value) => { setTabIndex(value)}}  
      aria-label="Menú de participación" 
      centered={true}
      textColor="inherit"
      indicatorColor="secondary"
      >
        <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
            tabIndex != 0 ? <DashboardOutlinedIcon fontSize={'small'} />: <DashboardIcon fontSize={'small'} />
        }<Typography sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Mural</Typography></Box>} />
        <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
            tabIndex != 1 ? <EventOutlinedIcon fontSize={'small'} /> : <EventIcon fontSize={'small'} /> 
        }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Eventos</Typography></Box>} />
        <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
            tabIndex != 2 ? <HowToVoteOutlinedIcon fontSize={'small'} /> : <HowToVoteIcon fontSize={'small'} />
        }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Votaciones</Typography></Box>} />
        <StyledTab label={<Box sx={{display: "flex", flexDirection: 'row'}}>{
        tabIndex != 3 ? <StickyNote2OutlinedIcon fontSize={'small'} /> : <StickyNote2Icon fontSize={'small'} />
        }<Typography variant={'caption'} sx={{flex:1, fontSize: 'small', textTransform: 'none'}}> Tareas</Typography></Box>} />
    </Tabs>)
    return () => setTabs(null)
  }, [tabIndex])

  return (
    <Box>
      <Paper elevation={0} sx={{ position: 'sticky', top: 0 }}>
        <Toolbar>
          <Button>Mis afiliaciones</Button>
          <Button>Buscar</Button>
        </Toolbar>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={tabIndex}
        onChangeIndex={(index) => setTabIndex(index)}
      >
        <TabPanel value={tabIndex} index={0} dir={theme.direction}>
          <Typography variant="h1">Participación SDCL :)</Typography>
          <Typography variant="subtitle1">Mural</Typography>
          <Masonry columns={2} spacing={1}>
            {mock.map((item, index) => (
              <Paper key={item}>
                {index + 1}: {item}
              </Paper>
            ))}
          </Masonry>
        </TabPanel>
        <TabPanel value={tabIndex} index={1} dir={theme.direction}>
        <Masonry columns={2} spacing={1}>
          <Typography variant="h1">Participación SDCL :)</Typography>
          <Typography variant="subtitle1">Eventos</Typography>
            {mock.map((item, index) => (
              <Paper key={item}>
                {index + 1}: {item}
              </Paper>
            ))}
          </Masonry>
        </TabPanel>
        <TabPanel value={tabIndex} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={tabIndex} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}
