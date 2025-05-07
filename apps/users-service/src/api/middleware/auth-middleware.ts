import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (
  req: Request | any,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;

  if (!user) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  next();
};
