import express from 'express';
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUserProfileController,
  getUsersController,
  updateUserController,
  userLoginController,
} from './controllers/controller';
import { verifyAuthMiddleware } from './middlewares/verifyAuth';
import { verifyEmailMiddleware } from './middlewares/verifyEmail';
import { verifyIsAdminMiddleware } from './middlewares/verifyIsAdmin';
import { verifyUserExistsMiddleware } from './middlewares/verifyUserExists';

const app = express();
app.use(express.json());

app.get(
  '/users',
  verifyAuthMiddleware,
  verifyIsAdminMiddleware,
  getUsersController,
);

app.get(
  '/users/:id',
  verifyUserExistsMiddleware,
  verifyAuthMiddleware,
  verifyIsAdminMiddleware,
  getUserByIdController,
);

app.get('/users/profile', verifyAuthMiddleware, getUserProfileController);

app.post('/users', verifyEmailMiddleware, createUserController);

app.patch(
  '/users/:id',
  verifyUserExistsMiddleware,
  verifyAuthMiddleware,
  verifyEmailMiddleware,
  updateUserController,
);

app.delete(
  '/users/:id',
  verifyAuthMiddleware,
  verifyUserExistsMiddleware,
  deleteUserController,
);

app.post('/login', userLoginController);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));

export default app;
