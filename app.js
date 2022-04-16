const express = require('express');
const path = require('path')

const PizzasRouter = require('./routes/PizzasRouter');

const app = express();


app.set('view engine, ejs');

app.get('/',(req,res)=>{
    res.redirect('/pizzas');
});

app.use('/', PizzasRouter);

app.use(express.static('public'));

app.listen(3000,()=>{console.log('Servidor rodando na porta 3000')})


