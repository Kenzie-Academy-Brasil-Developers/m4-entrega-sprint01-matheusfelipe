import users from '../database';

export const verifyEmailMiddleware = (req, res, next) => {
  const { email } = req.body.email;

  const userIndex = users.findIndex((elem) => elem.email === email);

  if (userIndex === -1) {
    return next();
  }

  return res.status(409).json({ message: 'E-mail already registered' });
};
