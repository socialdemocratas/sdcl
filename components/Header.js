import { 
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Typography,
    Skeleton
} from "@mui/material";
import { useTheme } from '@mui/material/styles'
import Isotype from './Isotype'

export default function Header({ title }) {

    const theme = useTheme();

    return <AppBar color="transparent" position="relative" elevation={0}>
        <Toolbar>
            <IconButton
              size="large"
              color="primary"
              aria-label="menu"
              edge_="start"
            >
              <Isotype style={{ width: '36px', height: '36px' }} color={theme.palette.primary.main} />
            </IconButton>
            <Typography variant="h6" component="h1" sx={{ flexGrow_: 1 }}>{title ? title:  <Skeleton />}</Typography>
            <Button>Ingresar</Button>
        </Toolbar>
    </AppBar>

}