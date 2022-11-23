import users from '../database';

export const getUserByIdService = (userIndex, user) => {
  users[userIndex] = { ...users[userIndex], ...user };

  return [200, users[userIndex]];
};
