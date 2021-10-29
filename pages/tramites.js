import { Typography, Grid, Container } from "@mui/material"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Link from 'next/link'

const mock = [{
    id: 1001,
    title: 'Unirme como socialdemócrata (SD)',
    abstract: 'Crea una cuenta en la plataforma como socialdemócrata, pero sin militar en el partido'
}, {
    id: 1002,
    title: 'Unirme como socialdemócrata militante (SDCL)',
    abstract: 'Crea una cuenta en la plataforma como militante del partido Socialdemócratas de Chile (SDCL)'
}, {
    id: 1003,
    title: 'Solo crear una cuenta',
    abstract: 'Crea una cuenta en la plataforma sin declarar ser afín a la socialdemocracia',
    who: 'Cualquiera'
}, {
    id: 1004, 
    title: 'Publicar en Voz SD',
    abstract: 'Solicita publicar una nota u opinión en nuestro medio de comunicación',
    who: 'Tener una cuenta'
}]

export default function Tramites({ setTitle }) {
    setTitle('Central de Trámites')
    return <Container>
        <Typography h2>Trámites</Typography>
        <Grid container spacing={3}>
        {mock.map((item) => <Grid item xs={12} key={item.id}>
            <Box sx={{
                background: '#fffce0',
                width: '100px',
                height: '30px',
                textAlign: 'center',
                borderRadius: '8px 22px 0 0',
                zIndex: 2,
                marginBottom: '-3px',
                position: 'relative'
            }}><Typography variant="caption">{item.id}</Typography></Box>
            <Card key={item.id} sx={{ background: '#fffce0' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.who}
                </Typography>
                <Typography variant="h5" component="div">
                {item.title}
                </Typography>
                <Typography variant="body2">
                {item.abstract}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href="/tramites/visor/test">
                    <Button size="small">Abrir en Editor</Button>
                </Link>
                <Box flexGrow={1} />
                <Button size="small">Iniciar trámite</Button>
            </CardActions>
        </Card>
        </Grid>)}
        </Grid>
    </Container>
}