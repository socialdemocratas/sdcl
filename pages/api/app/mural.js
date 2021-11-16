import data from '../../../etc/publicacionesMock'
export default function handler(req, res) {
    res.status(200).json(data)
}