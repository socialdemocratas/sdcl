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
import Link from 'next/link'

export default function Header({ title }) {

    const theme = useTheme();

    return <AppBar color="transparent" position="relative" elevation={0}>
        <Toolbar>
          <Link href="/"><IconButton
              size="large"
              color="primary"
              aria-label="menu"
              edge_="start"
            >
              <Isotype style={{ width: '32px', height: '32px' }} color={theme.palette.primary.main} />
            </IconButton></Link>
            <Typography variant="h6" component="h1" sx={{ flexGrow_: 1 }}>{!!title ? title:  <Skeleton />}</Typography>
            <Button>Ingresar</Button>
        </Toolbar>
    </AppBar>

}