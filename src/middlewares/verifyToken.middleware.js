import jwt from 'jsonwebtoken';
import users from '../database';

export const verifyTokenMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: 'Missing authorization headers' });
  }

  const token = authToken.split(' ')[1];

  return jwt.verify(token, 'SECRET_KEY', (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: 'Invalid Token' });
    }

    req.user = users.find((elem) => elem.uuid === decoded.sub);

    return next();
  });
};
