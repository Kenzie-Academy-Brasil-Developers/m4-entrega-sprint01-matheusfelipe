import users from '../database';
import { createUserService } from '../services/createUser';
import { deleteUserService } from '../services/deleteUser';
import { updateUserService } from '../services/updateUser';
import { userLoginService } from '../services/userLogin';

export const createUserController = async (req, res) => {
  const [status, user] = await createUserService(req.body);
  return res.status(status).json(user);
};

export const getUsersController = (req, res) => {
  return res.status(200).json(users);
};

export const getUserByIdController = (req, res) => {
  return res.status(200).json(req.foundUser);
};

export const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  const [status, token] = await userLoginService(email, password);

  return res.status(status).json(token);
};

export const getUserProfileController = (req, res) => {};

export const updateUserController = (req, res) => {
  const [status, user] = updateUserService(req);
  return res.status(status).json(user);
};

export const deleteUserController = (req, res) => {
  const [status, message] = deleteUserService(req);
  return res.status(status).json(message);
};
