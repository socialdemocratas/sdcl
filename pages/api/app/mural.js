export default function handler(req, res) {
    res.status(200).json([{
        id: 552,
        title: 'Minuta reunión 12/11',
        abstract: 'Resumen de la reunión general',
        type: 'TERRITORIAL/COMUNAL',
        group: 'Comunal San Miguel'
    }, {
        id: 554,
        title: 'Minuta reunión 01/11',
        abstract: 'Resumen de la reunón general',
        type: 'TERRITORIAL/REGIONAL',
        group: 'Regional Metropolitano'
    }, {
        id: 565,
        title: 'Minuta reunión 01/11',
        abstract: 'Resumen de la reunón general',
        type: 'TERRITORIAL/NACIONAL',
        group: 'Nacional'
    }])
}