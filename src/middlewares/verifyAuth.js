import jwt from 'jsonwebtoken';

export const verifyAuthMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: 'Missing authorization headers' });
  }

  const token = authToken.split(' ')[1];

  return jwt.verify(token, 'SECRET_KEY', (error) => {
    if (error) {
      return res.status(401).json({ message: 'Missing authorization headers' });
    } else {
      return next();
    }
  });
};
