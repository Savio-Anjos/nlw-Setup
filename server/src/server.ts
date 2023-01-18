import Fastfy from 'fastify'
import cors from "@fastify/cors"
import { appRoutes } from './routes'

const app = Fastfy() 
app.register(appRoutes)
app.register(cors)



app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})