import moment from 'moment';
import users from '../database';

export const updateUserService = (req) => {
  const uuid = req.params.uuid;
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return [404, { message: 'User not found' }];
  }

  if (req.body.hasOwnProperty('isAdm')) {
    return [401, { message: 'Unable to change user type' }];
  }

  users[userIndex] = {
    ...users[userIndex],
    updatedOn: moment().format('LLLL'),
    ...req.body,
  };

  const { password, ...restUserUpdate } = users[userIndex];

  return [200, restUserUpdate];
};
