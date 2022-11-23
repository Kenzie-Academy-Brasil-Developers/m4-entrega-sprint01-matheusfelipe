import users from '../database';

export const getUsersController = (req, res) => {
  return res.status(200).json(users);
};
