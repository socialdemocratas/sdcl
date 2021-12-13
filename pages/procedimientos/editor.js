import { useEffect, useState } from "react"
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Head from 'next/head'
import {
  Typography,
  FormControl,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
  Menu,
  Input,
  IconButton,
  ButtonGroup,
  Paper,
  Button,
  Container,
  Box,
  Tabs,
  Tab,
  Autocomplete,
  Select,
  MenuItem,
  Stack
} from "@mui/material"
import Layout from "../../components/Layout"
import Mermaid from '../../components/procedure/Mermaid';

import { createSvgIcon } from '@mui/material/utils';
import { styled, darken } from '@mui/material';
import { mdiFormTextbox, mdiFormTextarea, mdiFormSelect, mdiCardAccountDetailsOutline, mdiFunctionVariant } from '@mdi/js';
import { useTheme } from "@mui/material/styles";

import EditForm from '../../components/procedure/EditForm';
import * as plib from '../../lib/procedure'

import {
  ScriptText,
  ScriptTextOutline
} from '../../components/extraIcons'


function Details({ p }) {
  return <>
    <Typography variant="h1">Procedimiento</Typography>
    <Mermaid procedure={p} />
  </>
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontSize: theme.typography.pxToRem(12),
    textTransform: 'none',
    letterSpacing: 0,
    minHeight: '52px',
    minWidth: 0
  }),
);

function Home() {

  const theme = useTheme()
  const [selected, setSelected] = useState('details');
  const [task, setTask] = useState();

  const [p, setP] = useState();
  useEffect(() => {
    setP(plib.newProcedure());
  }, []);
  if(!p) return <Typography variant="caption">Cargando...</Typography>;
  
  const handleChangeTab = (tab) => {
    if(tab == 'add') {
      let form = plib.addForm(p)
      setP({...p});
      setTask(form);
      setSelected(form.id)
    } else {
      if(tab !== 'details') {
        setTask(plib.getTask(p, tab));
      }
      setSelected(tab)
    }
  }


  return (
    <>
      {selected == 'details' && <Details p={p} />}
      {selected != 'details' && selected != 'add' && <EditForm p={p} form={task} setP={setP} />}
      <Box height='60px'></Box>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: theme.palette.bg.main, borderRadius: 0 }} elevation={0}>
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
          onChange={(_, value) => handleChangeTab(value)}
        >
          <StyledTab value="details" icon={
            selected != "details" ? <ScriptTextOutline fontSize={'small'} /> : <ScriptText fontSize={'small'} />
          } iconPosition="start" label="Documentación" />
          {p.tasks.map((task) => <StyledTab key={task.id} value={task.id} label={task.id} />)}
          <StyledTab value="add" label="+Formulario" />
          <StyledTab value="add" label="+Acción" />
        </Tabs>
      </Box>
    </>
  )
}

Home.getLayout = (page) =>
  <Layout
    title="Editor de procedimientos | SDCL"
    variant="simple"
  >
    <Head>
      <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
      </Head>
    {page}
  </Layout>

export default Home;