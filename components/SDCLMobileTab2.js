import { useEffect, useState  } from "react"
import Router, { useRouter } from 'next/router'
import {
  Tabs,
  IconButton,
  Tab
} from "@mui/material"
import { useTheme, styled, darken } from '@mui/material/styles'

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';


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
  //  _textColor={darken(theme.palette.bg.main, 0.8)}
  return (
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
      onChange={(_, value)=> {
        Router.push({ query: { t: value } })
      }}
      aria-label="icon position tabs example"
    >
      {spacesList.map(item => <StyledTab key={item} value={item} label={item} />)}
      <StyledTab key='like' value='_megusta' icon={<FavoriteIcon />} />
      <StyledTab key='search' value='_buscar' icon={<SearchIcon />}/>
      <IconButton>
      <ArrowDropUpIcon />
    </IconButton>
    </Tabs>
  )
}