const express = require('express')
const { response } = require('express')
const { uuid } = require('uuidv4')//id unico


const app = express()
app.use(express.json())
const computadores = []
const perifericos = []
const notebooks = []



//---------------------------------------Computadores---------------------------------------------//

app.get('/computadores', (request, response) => {
    return response.json(computadores)
})//Visualizar
app.post('/computadores', (request, response) => {
    const { hardwarer, software, preço } = request.body
    const especificacao = { id: uuid(), hardwarer, software, preço }
    computadores.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
app.put('/computadores/:id', (request, response) => {
    const { id } = request.params
    const { hardwarer, software, preço } = request.body
    const newComputadores = { id, hardwarer, software, preço }
    const especificacaoindex = computadores.findIndex(especificacao => especificacao.id == id)
    computadores[especificacaoindex] = newComputadores;
    return response.json(newComputadores)
})
//delete apaga
app.delete('/computadores/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = computadores.findIndex(especificacao => especificacao.id == id)
    computadores.splice(especificacaoindex, 1)
    return response.status(204).send()
})


app.listen(8181, () => {
    console.log('O Servidor foi iniciado!')
})


///------------------Perifericos-----------------------------------//

app.get('/perifericos', (request, response) => {
    return response.json(perifericos)
})//Visualizar
app.post('/perifericos', (request, response) => {
    const { Monitor, Teclado, mouse } = request.body
    const especificacao = { id: uuid(), Monitor, Teclado, mouse }
    perifericos.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
app.put('/perifericos/:id', (request, response) => {
    const { id } = request.params
    const { Monitor, Teclado, mouse } = request.body
    const newPerifericos = { id, Monitor, Teclado, mouse }
    const especificacaoindex = perifericos.findIndex(especificacao => especificacao.id == id)
    perifericos[especificacaoindex] = newPerifericos;
    return response.json(newPerifericos)
})
//delete apaga
app.delete('/perifericos/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = perifericos.findIndex(especificacao => especificacao.id == id)
    perifericos.splice(especificacaoindex, 1)
    return response.status(204).send()
})

//----------------------------------------------------Notebooks--------------------//

app.get('/notebooks', (request, response) => {
    return response.json(notebooks)
})//Visualizar
app.post('/notebooks', (request, response) => {
    const { modelo, memoria, ssd } = request.body
    const especificacao = { id: uuid(), modelo, memoria, ssd }
    notebooks.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
app.put('/notebooks/:id', (request, response) => {
    const { id } = request.params
    const { modelo, memoria, ssd } = request.body
    const newNotebooks = { id, modelo, memoria, ssd }
    const especificacaoindex = notebooks.findIndex(especificacao => especificacao.id == id)
    notebooks[especificacaoindex] = newNotebooks;
    return response.json(newNotebooks)
})
//delete apaga
app.delete('/notebooks/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = notebooks.findIndex(especificacao => especificacao.id == id)
    notebooks.splice(especificacaoindex, 1)
    return response.status(204).send()
})
