import users from '../database';

export const verifyEmailMiddleware = (req, res, next) => {
  const userIndex = users.findIndex((elem) => elem.email === req.body.email);

  if (userIndex === -1) {
    return next();
  }

  return res.status(409).json({ message: 'E-mail already registered' });
};
