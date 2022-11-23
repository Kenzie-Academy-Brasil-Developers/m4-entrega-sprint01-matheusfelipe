import users from '../database';

export const getUserByIdService = (uuid) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    console.log('veio aqui');
    return [404, { message: 'User not found' }];
  }

  return [200, users[userIndex]];
};
