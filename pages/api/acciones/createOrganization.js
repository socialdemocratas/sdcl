import prisma from '../../../lib/prisma'

export default async function handle(req, res) {

    const { procesoId, nombre, tipo } = res.body

    const organica = await prisma.organica.create({
        data: {
            nombre,
            presentacion,
            tipo,
            roles: {
                create: [{
                    nombre: 'admin',
                    admin: true
                }]
            }
        }
    })

    const bitacora = await prisma.bitacora.create({
        data: {
            accion: 'createOrganization',
            proceso: { connect: procesoId },
            bitacoraOrganica: [{
                tipo: 'CREAR',
                organica: { connect: { id: organica.id } }
            }]
        }
    })

    res.json({
        ok: true,
        organica
    })

}