export const verifyAuthorizationMiddleware = (req, res, next) => {
  const { uuid } = req.params;

  if (req.user.isAdm == false) {
    if (req.user.uuid !== uuid) {
      return res.status(403).json({ message: 'Missing admin permissions' });
    }
  }

  return next();
};
