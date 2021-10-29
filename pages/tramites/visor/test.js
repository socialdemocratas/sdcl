import { 
    Typography,
    Container,
    Card,
    CardContent
} from "@mui/material"

export default function Tramites({ setTitle }) {
    setTitle('Visor de trámites')
    return <Container>
        <Typography variant="h2">Editando el trámite</Typography>
        <Card>
            <CardContent>
                <Typography variant="h3">Solicitud de incorporación</Typography>
                
            </CardContent>
        </Card>
    </Container>
}