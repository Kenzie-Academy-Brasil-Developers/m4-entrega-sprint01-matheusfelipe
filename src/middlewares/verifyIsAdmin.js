import jwt from 'jsonwebtoken';
import users from '../database';

export const verifyIsAdminMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;
  const token = authToken.split(' ')[1];
  const userLoggedIn = jwt.decode(token);
  const user = users.find((user) => user.uuid === userLoggedIn.sub);

  if (user) {
    if (!user.isAdm) {
      return res.status(403).json({
        message: 'Missing admin permissions',
      });
    }
    return next();
  }

  return res.status(404).json({ message: 'Missing admin permissions' });
};
