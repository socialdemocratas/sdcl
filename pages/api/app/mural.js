export default function handler(req, res) {
    res.status(200).json([{
        id: 552,
        title: 'Minuta reunión 12/11',
        abstract: 'Resumen de la reunión general',
        type: 'TERRITORIAL/COMUNAL',
        group: 'Comunal San Miguel',
        image: null
    }, {
        id: 568,
        title: 'Oportunidad para hacer historia en la Convención Constitucional',
        abstract: 'La CC ha hecho un llamado a las organizaciones civiles para dar una presentación de lo que esperan de ella.',
        type: 'TERRITORIAL/NACIONAL',
        group: 'Nacional',
        image: 'https://assets.eldesconcierto.cl/2021/07/Convencion-1024x576.jpg'
    }, {
        id: 554,
        title: 'Minuta reunión 01/11',
        abstract: 'Resumen de la reunón general',
        type: 'TERRITORIAL/REGIONAL',
        group: 'Regional Metropolitano',
        image: null
    }, {
        id: 600,
        title: 'Aniversario Comunal',
        abstract: 'Hola! recuerden que este mes es el aniversario de la comuna. ¿Qué actividades podemos hacer?',
        type: 'TERRITORIAL/COMUNAL',
        group: 'Comunal San Miguel',
        image: 'https://i.imgur.com/e89Pb8j.gif?noCache=0.22690443307425934'
    }, {
        id: 565,
        title: 'Minuta reunión 01/11',
        abstract: 'Resumen de la reunón general',
        type: 'TERRITORIAL/NACIONAL',
        group: 'Nacional',
        image: null
    }])
}