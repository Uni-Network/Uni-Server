import { getAllCountries, getCountryByName } from '../controllers/countries';
import { getAllCities, getCitiesByName } from '../controllers/cities';
import { getAllGroups, getGroupsByName, getGroupPosts } from '../controllers/groups';
import { createPost, updatePost, deletePost } from '../controllers/posts';
import { CommentAPost, GetCommentsOfPost, deleteComment, updateComment } from '../controllers/comments';

import authMiddlewares from '../middlewares/authentication';

import {
  authentication as authenticationController,
  genders as gendersController,
  users as usersController,
} from '../controllers';
import { getCurrentUserVisiblePosts } from '../controllers/users';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
  }));
  app.post('/api/login', authenticationController.userLogin);
  app.use(authMiddlewares);
  app.get('/api/genders', gendersController.getAllGenders);

  // Home Page


  // Country Routes
  app.get('/api/countries', getAllCountries);
  app.get('/api/countries/search', getCountryByName);

  // City Routes
  app.get('/api/cities', getAllCities);
  app.get('/api/cities/search', getCitiesByName);

  // User Routes
  app.get('/api/users', usersController.getAllUsers);
  app.get('/api/users/:id', usersController.getUserById);
  app.get('/api/users/current/posts', getCurrentUserVisiblePosts);


  // Group Routes
  app.get('/api/groups', getAllGroups);
  app.get('/api/groups/search', getGroupsByName);
  app.get('/api/groups/:groupId/posts', getGroupPosts);

  // Post Routes
  app.post('/api/posts', createPost);
  app.put('/api/posts/:post_id', updatePost);
  app.delete('/api/posts/:post_id', deletePost);

  //Comments Routes
  app.get('/api/comments/:post_id', GetCommentsOfPost);
  app.post('/api/comments', CommentAPost);
  app.put('/api/comments/:comment_id', updateComment);
  app.delete('/api/comments/:comment_id', deleteComment);
  
};
