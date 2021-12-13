import prisma from '../../../lib/prisma'

export default async function handle(req, res) {

    const { procesoId, nombre, tipo } = res.body

    const bitacora = await prisma.bitacora.create({
        data: {
            
        }
    })

    res.json({
        ok: true,
        organica
    })

}