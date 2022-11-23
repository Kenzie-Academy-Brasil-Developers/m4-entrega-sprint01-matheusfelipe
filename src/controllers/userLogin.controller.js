import { userLoginService } from '../services/userLogin.service';

export const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  const [status, token] = await userLoginService(email, password);

  return res.status(status).json(token);
};
