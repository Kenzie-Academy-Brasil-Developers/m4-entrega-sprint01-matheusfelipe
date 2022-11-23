import { updateUserService } from '../services/updateUser.service';

export const updateUserController = (req, res) => {
  const [status, user] = updateUserService(req);
  return res.status(status).json(user);
};
