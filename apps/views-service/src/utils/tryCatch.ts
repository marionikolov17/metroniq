import { Request, Response } from 'express';

export const tryCatch = (
  method: (req: any, res: Response) => Promise<void>,
) => {
  return async (req: Request, res: Response) => {
    method(req, res).catch((err) => {
      res.status(err.statusCode).json({
        status: err.status,
        data: {
          message: err.message,
        },
      });
    });
  };
};
