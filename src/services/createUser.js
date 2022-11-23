import users from '../database';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';
import moment from 'moment/moment';

export const createUserService = async (user) => {
  const hashedPassword = await hash(user.password, 10);

  const newUser = {
    ...user,
    uuid: uuidv4(),
    password: hashedPassword,
    createdOn: moment().format('LLLL'),
    updatedOn: moment().format('LLLL'),
  };

  users.push(newUser);

  const { password, ...rest } = newUser;

  return [201, rest];
};
