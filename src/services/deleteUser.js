import users from '../database';
import jwt from 'jsonwebtoken';

export const deleteUserService = (req) => {
  const authToken = req.headers.authorization;
  const token = authToken.split(' ')[1];
  const userLoggedIn = jwt.decode(token);
  const user = users.find((user) => user.uuid === userLoggedIn.sub);

  if (!user.isAdm) {
    const id = req.params.uuid;

    if (id !== user.uuid) {
      return [403, { message: 'Missing admin permissions' }];
    } else {
      users = users.filter((elem) => elem.uuid !== req.params.uuid);

      return [204, {}];
    }
  }

  users = users.filter((elem) => elem.uuid !== req.params.uuid);
  return [204, {}];
};
