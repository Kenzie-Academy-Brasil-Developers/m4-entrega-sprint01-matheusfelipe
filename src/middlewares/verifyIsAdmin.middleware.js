export const verifyIsAdminMiddleware = (req, res, next) => {
  if (!req.user.isAdm) {
    return res.status(403).json({ message: 'Missing admin permissions' });
  }

  return next();
};