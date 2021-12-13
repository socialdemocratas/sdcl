import prisma from '../../../lib/prisma'
import { EstadoProceso } from '@prisma/client'

export default async function handle(req, res) {

    const { procedimientoVersionId } = res.query

    const process = await prisma.process.create({
        data: {
            version: 'inicial',
            estado: EstadoProceso.BORRADOR,
            procedimientoVersionId
        }
    })

    res.json({
        ok: true,
        process
    })

}