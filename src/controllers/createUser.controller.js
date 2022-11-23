import { createUserService } from '../services/createUser.service';

export const createUserController = async (req, res) => {
  const [status, user] = await createUserService(req.body);
  return res.status(status).json(user);
};
