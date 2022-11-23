import moment from 'moment';
import users from '../database';

export const updateUserService = (req) => {
  const uuid = req.params.uuid;
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return [404, { message: 'User not found' }];
  }

  users[userIndex] = {
    ...users[userIndex],
    updatedOn: moment().format('LLLL'),
    ...req.body,
  };

  return [200, users[userIndex]];
};
