import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"



export async function appRoutes(app: FastifyInstance) {
    /*
  Método HTTP: Get, post, Put, PAtch, Delete
*/

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})
}
