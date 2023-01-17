import Fastfy from 'fastify'

const app = Fastfy() 

/*
  Método HTTP: Get, post, Put, PAtch, Delete
*/

app.get('/', () => {
    return("Hello NLW")
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})