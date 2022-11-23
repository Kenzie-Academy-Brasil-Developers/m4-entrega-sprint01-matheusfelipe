import { getUserProfileService } from '../services/getUserProfile.service';

export const getUserProfileController = (req, res) => {
  const [status, user] = getUserProfileService(req);
  return res.status(status).json(user);
};
