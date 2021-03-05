const port = 3003

const express = require('express')

const app = express()
app.get('/produtos',(request,response,next)=>{
    console.log('Funcionou a função Middleware :)')//Fazendo um log para testar se a função Middleware está funcionando
    next()
})

//Passando função middleware como callback function da resposta da requisição .get
app.get('/produtos',(request,response,next)=>{
    response.send({ nome: 'MacBook', preco: 25000.99}) //o método send converte automaticamente para o formato json
})

app.listen(port, () => {
    console.log('O Servidor está sendo executado na porta:',port)
}) // colocando a porta como 'listen'