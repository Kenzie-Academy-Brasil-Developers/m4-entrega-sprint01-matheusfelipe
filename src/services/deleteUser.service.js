import users from '../database';

export const deleteUserService = (uuid) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return [404, { message: 'User not found' }];
  }

  users.splice(userIndex, 1);
  return [204, {}];
};
