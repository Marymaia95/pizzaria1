const express = require('express');

const PizzasController = require('../controllers/PizzasController');

const router = express.Router();

router.get('/pizzas', PizzasController.listarPizzas)

router.get('/pizzas/busca', PizzasController.buscar)

router.get('/pizzas/:id', PizzasController.mostrarPizza)


module.exports = router;