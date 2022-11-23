import { Router } from 'express';
import { getUsersController } from '../controllers/getUsers.controller';
import { getUserProfileController } from '../controllers/getUserProfile.controller';
import { createUserController } from '../controllers/createUser.controller';
import { updateUserController } from '../controllers/updateUser.controller';
import { deleteUserController } from '../controllers/deleteUser.controller';
import { userLoginController } from '../controllers/userLogin.controller';
import { verifyTokenMiddleware } from '../middlewares/verifyToken.middleware';
import { verifyEmailMiddleware } from '../middlewares/verifyEmail.middleware';
import { verifyIsAdminMiddleware } from '../middlewares/verifyIsAdmin.middleware';
import { verifyAuthorizationMiddleware } from '../middlewares/verifyAuth.middleware';

export const router = Router();

router.get(
  '/users',
  verifyTokenMiddleware,
  verifyIsAdminMiddleware,
  getUsersController,
);

router.get('/users/profile', verifyTokenMiddleware, getUserProfileController);

router.post('/users', verifyEmailMiddleware, createUserController);

router.patch(
  '/users/:uuid',
  verifyTokenMiddleware,
  verifyAuthorizationMiddleware,
  verifyEmailMiddleware,
  updateUserController,
);

router.delete(
  '/users/:uuid',
  verifyTokenMiddleware,
  verifyAuthorizationMiddleware,
  deleteUserController,
);

router.post('/login', userLoginController);
