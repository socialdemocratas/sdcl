import { 
    Typography,
    Button
} from "@mui/material"

export default function Espacios({ setTitle }) {
    setTitle('Espacios SD')

    return <>
        <Button variant="outlined" color="navSelected" size="large" sx={{ borderRadius: 30, textTransform: 'none', margin: '8px', width: 'calc(100% - 16px)', position: 'sticky', top: '8px', backgroundColor: '#fff' }}>Comunal San Miguel</Button>
        <Typography h2>Espacios</Typography>
        { [...Array(100).keys()].map((i) => {
            return <p key={i}>Hola, como estay {i}</p>
        }) }
    </>
}