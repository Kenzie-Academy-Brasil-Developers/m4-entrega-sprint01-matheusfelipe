export const getUserProfileService = (req) => {
  return [200, req.user];
};
