import { useEffect, useState } from "react"
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {
  Toolbar,
  Typography,
  FormControl,
  InputAdornment,
  TextField,
  OutlinedInput,
  InputLabel,
  Menu,
  Input,
  IconButton,
  Drawer,
  ButtonGroup,
  Paper,
  Button,
  Container,
  Box,
  Autocomplete,
  Select,
  MenuItem,
  Stack
} from "@mui/material"

import * as plib from '../../lib/procedure'

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { createSvgIcon } from '@mui/material/utils';

import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { mdiFormTextbox, mdiFormTextarea, mdiFormSelect, mdiCardAccountDetailsOutline, mdiFunctionVariant } from '@mdi/js';
import { useTheme } from "@mui/material/styles";
const FormTextboxIcon = createSvgIcon(<path d={mdiFormTextbox} />, 'FormTextbox');
const FormTextareaIcon = createSvgIcon(<path d={mdiFormTextarea} />, 'FormTextarea');
const FormSelectIcon = createSvgIcon(<path d={mdiFormSelect} />, 'FormSelect');
const CardAccountDetailsOutlineIcon = createSvgIcon(<path d={mdiCardAccountDetailsOutline} />, 'CardAccountDetailsOutline');
const FunctionVariantIcon = createSvgIcon(<path d={mdiFunctionVariant} />, 'FunctionVariant');

const REGEX_GOTO = /^((?<goto>[A-Z][A-Z]*):\s*(?<label>.+))/gm;

function FormFieldTypeSelector() {
  const theme = useTheme()
  const [type, setType] = useState('text')
  const handleSetMenu = (popupState, _type) => {
    return () => {
      popupState.close()
      setType(_type)
    }
  }

  const Icon = ({
    text: FormTextboxIcon,
    textarea: FormTextareaIcon,
    select: FormSelectIcon,
    date: CalendarTodayOutlinedIcon,
    rut: CardAccountDetailsOutlineIcon,
    email: AlternateEmailOutlinedIcon
  })[type];

  return <PopupState variant="popover">
    {(popupState) => (
      <>
        <IconButton {...bindTrigger(popupState)}><Icon /></IconButton>
        <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={handleSetMenu(popupState, 'text')}
            sx={{
              '& .MuiSvgIcon-root': {
                marginRight: theme.spacing(1),
              }
            }}
          ><FormTextboxIcon /> Texto corto</MenuItem>
          <MenuItem onClick={handleSetMenu(popupState, 'textarea')}><FormTextareaIcon /> Texto largo</MenuItem>
          <MenuItem onClick={handleSetMenu(popupState, 'select')}><FormSelectIcon /> Listado</MenuItem>
          <MenuItem onClick={handleSetMenu(popupState, 'date')}><CalendarTodayOutlinedIcon /> Fecha</MenuItem>
          <MenuItem onClick={handleSetMenu(popupState, 'rut')}><CardAccountDetailsOutlineIcon /> RUT</MenuItem>
          <MenuItem onClick={handleSetMenu(popupState, 'email')}><AlternateEmailOutlinedIcon /> Email</MenuItem>
        </Menu>
      </>
    )}
  </PopupState>
}

export default function EditForm({ p, setP, form }) {

  const theme = useTheme()

  const [title, setTitle] = useState('')
  useEffect(() => {
    setTitle(form.title)
  }, [form.id])

  const [description, setDescription] = useState('')
  useEffect(() => {
    setDescription(form.description)
  }, [form.id])


  const [actionFormula, setActionFormula] = useState('')
  useEffect(() => {
    setActionFormula(form.actionFormula)
  }, [form.id])

  let formula = actionFormula;
  formula = formula.replace(new RegExp('([A-Z]+[1-9][0-9]*)', 'gi'), '<span style="background-color:lightyellow";outine:1px solid yellow>$1</span>')
  formula = formula.replace(new RegExp('(SI.+(\n([A-Z]+:.*)|SINO\n([A-Z]+:.*))*)', 'gmi'), '<span style="outline:1px solid lightgray;display:inline-block;border-radius:4px">$1</span>')
  formula = formula.replace(REGEX_GOTO, '<span style="background-color:#f1fdf9;border-radius:10px; padding: 0 8px; margin-left: -8px;outline:1px solid #85ffd6">$1</span>')

  const handleOnBlurFormulaField = (event) => {
    form.actionFormula = actionFormula;
    const matches = actionFormula.matchAll(REGEX_GOTO);
    console.log('matches', matches)
    form.actions.length = 0;
    for(const match of matches) {
      console.log('match', match)
      form.actions.push({
        goto: match[2],
        label: match[3],
        condition: ''
      })
    }
    console.log(p)
    setP({ ...p });
  }

  const handleAddField = () => {
    const field = plib.addFormField(form)
    setP({ ...p });
  }

  const [scrollTop, setScrollTop] = useState(window.pageYOffset === 0);
  useEffect(() => {
    let ticking = false;
    const updateScrollTop = () => {
      const isTop = window.pageYOffset === 0;
      if((scrollTop && isTop) || (!scrollTop && !isTop)) {
        ticking = false;
        return;
      }
      setScrollTop(isTop);
      console.log('isTop', isTop)
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollTop);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const [formPreviewOpen, setFormPreviewOpen] = useState(false)

  return <div>
    <Toolbar sx={{ transition: 'background-color 1s ease', backgroundColor: scrollTop ? '#fff' : theme.palette.bg.main, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
      <Typography variant="h6" component="h1" flexGrow="1">Formulario {form.id}</Typography>
      <IconButton size="large" color="inherit"
        onClick={() => setFormPreviewOpen(true)}>
        <VisibilityOutlinedIcon />
      </IconButton>
      <IconButton size="large" color="inherit">
        <DeleteForeverOutlinedIcon />
      </IconButton>
    </Toolbar>
    <Toolbar />
    <Container>
      <TextField
        onChange={(event) => setTitle(event.target.value)}
        onBlur={event => { form.title = title; setP({ ...p }) }}
        multiline
        label="Título del formulario"
        margin="normal"
        variant="outlined"
        value={title}
        sx={{
          '& .MuiInputBase-input': {
            fontFamily: "Inter",
            fontWeight: 700
          }
        }}
        size="large"
        fullWidth />

      <Autocomplete
        multiple
        margin="normal"
        options={['@nacional:dirigencia', '@nacional:consejerx', '@nacional:tribunalSupremo', '@regionalAntofagasta:dirigencia']}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Habilitado para"
            fullWidth
            variant="standard"
            variant="outlined"
            helperText="Quiénes pueden completar este formulario"
          />
        )}
      />

      <TextField
        multiline
        label="Descripción"
        fullWidth
        margin="normal"
        minRows={3}
        variant="outlined"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        onBlur={event => { form.description = description; setP({ ...p }) }}
        helperText="*negrita* _italica_"
      />

      <Stack sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: '4px', marginBottom: theme.spacing(1), position: 'relative' }}>
        <Typography variant="inherit" sx={{
          position: 'absolute',
          top: '-0.75rem',
          zIndex: 9,
          display: 'block',
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          fontWeight: 400,
          fontSize: '0.75rem',
          lineHeight: 1.66,
          letterSpacing: '0.03333em',
          textAlign: 'left',
          marginTop: '3px',
          marginRight: '14px',
          marginBottom: 0,
          marginLeft: '14px',
          background: '#fff'
        }}>Campos</Typography>
        {form.fields.map((field) =>
          <FormControl key={field.id} sx={{ flexDirection: 'row' }} margin="normal">
            <Input
              startAdornment={<InputAdornment position="start">
                <Box width="24px" textAlign="center">{field.id}</Box>
                <FormFieldTypeSelector />
              </InputAdornment>}
              endAdornment={<InputAdornment position="end">
                <IconButton><MoreVertIcon /></IconButton>
              </InputAdornment>}
              sx={{ flex: 1 }}
            />
          </FormControl>
        )}
        <Button onClick={handleAddField}>Agregar</Button>
      </Stack>

      <Box position="relative">
        <div style={{
          whiteSpace: 'pre-wrap',
          position: 'absolute',
          top: '32px',
          left: '45px',
          right: '14px',
          lineHeight: '23px',
          color: "transparent"
        }}
          dangerouslySetInnerHTML={{ __html: formula }} />
        <TextField
          multiline
          spellCheck={false}
          label="Al completar ir a"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ lineHeight: '23px' }}
          value={actionFormula}
          onChange={(event) => setActionFormula(event.target.value)}
          onBlur={handleOnBlurFormulaField}
          InputProps={{
            startAdornment: <InputAdornment position="start"><FunctionVariantIcon /></InputAdornment>
          }}
        />
      </Box>

    </Container>
    
    
    <Drawer
      anchor="bottom"
      open={formPreviewOpen}
      onClose={() =>{ setFormPreviewOpen(false) }}
      PaperProps={{
        sx: {
          height: '90%',
          borderRadius: '10px 10px 0 0',
          paddingTop: '40px'
        }
      }}
    >      
      <Container>
        <Box sx={{position: 'absolute', top: 0, right: 0}}>
          <IconButton
            size="large"
            onClick={()=>setFormPreviewOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h3">{title}</Typography>
        <div>{description}</div>
      </Container>
    </Drawer>

    </div>
}