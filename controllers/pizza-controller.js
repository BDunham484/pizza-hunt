const { Pizza } = require('../models');

const pizzaController = {
    //get all pizzas
    getAllPizza(req, res) {
        Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
            res.status(400).jsone(err);
        });
    },
    //get one pizza by id
    getPizzaById({ params }, res) {
        Pizza.findOne({ _id: params.id})
        .then(dbPizzaData => {
            //if no pizza is found, send 404
            if (!dbPizzaData) {
                res.status(404).json({ message: 'No pizza found with this id' });
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    //create a pizza
    createPizza({ body }, res) {
        Pizza.create(body)
            .then(dbPizzaData => res.json(dbPizzaData))
            .catch(err => res.status(400).jsone(err))
    },
    //update pizza by id
    updatePizza({ params, body }, res) {
        Pizza.findOneAndUpdate({ _id: params.id }, body, { new:true })
            .then(dbPizzaData => {
                //if no pizza is found with this id, send 404
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza found with this id!' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.status(400).jsone(err));
    },
    //delete pizza
    deletePizza({ params }, res) {
        Pizza.findOneAndDelete({ _id: params.id })
            .then(dbPizzaData => {
                //if no pizza with id is found, send 404
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza with this id!' });
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = pizzaController;