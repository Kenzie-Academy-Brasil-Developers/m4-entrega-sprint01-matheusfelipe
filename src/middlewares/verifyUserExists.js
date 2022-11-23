import users from '../database';

export const verifyUserExistsMiddleware = (req, res, next) => {
  const userIndex = users.findIndex((user) => user.uuid === req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  req.foundUser = users[userIndex];
  req.userIndex = userIndex;

  return next();
};
