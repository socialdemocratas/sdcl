import prisma from '../../../lib/prisma'

export default async function handle(req, res) {

    const { nombre, definition } = res.query

    const versionProcedure = await prisma.versionProcedure.create({
        include: {
            procedure: true
        },
        data: {
            version: 'inicial',
            procedure: {
                create: {
                    nombre,
                    definition
                }
            }
        }
    })

    res.json({
        ok: true,
        versionProcedure
    })

}