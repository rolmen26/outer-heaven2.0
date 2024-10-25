/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import User from '../app/models/user.js';
import { use } from 'chai';

router.get('/', async () => {
  return {
    hello: 'world',
  }
});