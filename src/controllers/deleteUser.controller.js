import { deleteUserService } from '../services/deleteUser.service';

export const deleteUserController = (req, res) => {
  const { uuid } = req.params.uuid;

  const [status, message] = deleteUserService(uuid);
  return res.status(status).json(message);
};
