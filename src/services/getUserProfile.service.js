export const getUserProfileService = (req) => {
  if (!req.user) {
    return [404, { message: 'User not found' }];
  }

  const { password, ...rest } = req.user;

  return [200, rest];
};
