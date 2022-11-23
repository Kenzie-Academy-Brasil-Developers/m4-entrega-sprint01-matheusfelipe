import users from '../database';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const userLoginService = async (email, password) => {
  const user = users.find((elem) => elem.email === email);

  if (!user) {
    return [401, { message: 'Wrong email/password' }];
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    return [401, { message: 'Wrong email/password' }];
  }

  const token = jwt.sign({ email }, 'SECRET_KEY', {
    expiresIn: '24h',
    subject: user.uuid,
  });

  return [200, { token }];
};
