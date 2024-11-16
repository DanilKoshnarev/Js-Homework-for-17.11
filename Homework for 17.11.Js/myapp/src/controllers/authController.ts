import { Request, Response } from 'express';
import authService from '../services/authService';

export const authRegistration = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const result = await authService.registerUser({ username, email, password });

  if (result.status === 'error') {
    return res.status(400).json({ message: result.message });
  }

  // Assuming you have a function to generate a token
  const token = generateToken(result.user);
  res.cookie('authToken', token, { httpOnly: true });
  res.status(200).json({ message: 'Registration successful' });
};
