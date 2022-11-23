import moment from 'moment';
import users from '../database';
import jwt from 'jsonwebtoken';

export const updateUserService = (req) => {
  const authToken = req.headers.authorization;
  const token = authToken.split(' ')[1];
  const userLoggedIn = jwt.decode(token);
  const user = users.find((user) => user.uuid === userLoggedIn.sub);

  if (!user.isAdm) {
    const id = req.params.id;

    if (id !== user.uuid) {
      return [403, { message: 'Missing admin permissions' }];
    } else {
      users[req.userIndex] = {
        ...users[req.userIndex],
        updatedOn: moment().format('LLLL'),
        ...req.body,
      };

      return [200, users[req.userIndex]];
    }
  }

  users[req.userIndex] = {
    ...users[req.userIndex],
    updatedOn: moment().format('LLLL'),
    ...req.body,
  };

  return [200, users[req.userIndex]];
};
