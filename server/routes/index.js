const gendersController = require('../controllers').genders;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));


  app.get('/api/genders', gendersController.getAllGenders);
};
