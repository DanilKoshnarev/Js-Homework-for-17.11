import userRepository from '../repositories/userRepository';

interface User {
  username: string;
  email: string;
  password: string;
  role?: string;
}

interface SuccessResponse {
  status: 'ok';
  user: User;
}

interface ErrorResponse {
  status: 'error';
  message: string;
}

const registerUser = async (user: User): Promise<SuccessResponse | ErrorResponse> => {
  const existingUser = await userRepository.findUserByEmail(user.email);

  if (existingUser) {
    return { status: 'error', message: 'User exists' };
  }

  user.role = 'user';
  const newUser = await userRepository.createUser(user);
  return { status: 'ok', user: newUser };
};

export default { registerUser };
