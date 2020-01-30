const gendersController = require('../controllers').genders;
const usersController = require('../controllers').users;
import {getAllCountries,getCountryByName} from '../controllers/countries';
const authenticationController = require('../controllers').authentication;



module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));
  app.post('/api/login',authenticationController.userLogin);
  app.use(require('../middlewares/authentication'));
  app.get('/api/genders', gendersController.getAllGenders);


  //Country Routes
  app.get('/api/countries', getAllCountries);
  app.get('/api/countries/search', getCountryByName);

  // User Routes
  app.get('/api/users', usersController.getAllUsers);
  app.get('/api/users/:id', usersController.getUserById);


};
