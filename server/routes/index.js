import { getAllCountries, getCountryByName } from '../controllers/countries';
import { getAllCities, getCitiesByName } from '../controllers/cities';
import { getAllGroups, getGroupsByName } from '../controllers/groups';


import authMiddlewares from '../middlewares/authentication';

import {
  authentication as authenticationController,
  genders as gendersController,
  users as usersController,
} from '../controllers';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));
  app.post('/api/login', authenticationController.userLogin);
  app.use(authMiddlewares);
  app.get('/api/genders', gendersController.getAllGenders);


  // Country Routes
  app.get('/api/countries', getAllCountries);
  app.get('/api/countries/search', getCountryByName);

  // City Routes
  app.get('/api/cities', getAllCities);
  app.get('/api/cities/search', getCitiesByName);

  // User Routes
  app.get('/api/users', usersController.getAllUsers);
  app.get('/api/users/:id', usersController.getUserById);


  // Group Routes
  app.get('/api/groups', getAllGroups);
  app.get('/api/groups/search', getGroupsByName);
};
