import prisma from '../../../lib/prisma'

export default async function handle(req, res) {

    const tertulias = await prisma.tertulia.findMany({
    })

    res.json(tertulias)

}