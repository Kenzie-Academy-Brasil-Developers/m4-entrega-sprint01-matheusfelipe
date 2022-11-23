import { getUserByIdService } from '../services/getUserById.service';

export const getUserByIdController = (req, res) => {
  const uuid = req.params.uuid;
  console.log('Dentro do get user by id controller');
  const [status, user] = getUserByIdService(uuid);

  return res.status(status).json(user);
};
