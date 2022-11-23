import users from '../database';

export const deleteUserService = (uuid) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  users.splice(userIndex, 1);
  return [204, {}];
};
