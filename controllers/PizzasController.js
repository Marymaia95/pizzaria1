const { query } = require('express');

module.exports = {
    listarPizzas: (req, res) => {

        let pizzas = require('../database/pizzas.json');

        res.render('pizzas.ejs', { pizzas, busca: "" });
    },

    mostrarPizza: (req, res) => {

        let pizzas = require('../database/pizzas.json');

        // let indexProxima=

        //let indexAnterior= 


        let idDaPizza = req.params.id;

        let posicao = pizzas.findIndex(
            (p) => {
                return p.id == idDaPizza
            });


        let indexProxima = (posicao + 1) % pizzas.length
        let indexAnterior = (posicao - 1)

        if (indexAnterior == -1) {
            indexAnterior = pizzas.length - 1
        };

        res.render('pizza.ejs', {
            pizza: pizzas[posicao],
            idAnterior: pizzas[indexAnterior].id,
            idProxima: pizzas[indexProxima].id
        });
    },

    buscar: (req, res) => {

        let pizzas = require('../database/pizzas.json');


        let trechoBuscado = req.query.q;
        console.log(req.query.q);

        if (trechoBuscado === "") {
            res.redirect('/')
        } else {
            let resultado = pizzas.filter(function (p) {
                return p.nome.toLowerCase().includes(trechoBuscado.toLowerCase())
            });
            console.log(resultado)

            res.render('pizzas.ejs', { pizzas: resultado, busca: trechoBuscado });
        }



    }

}


