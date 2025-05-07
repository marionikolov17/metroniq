import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "./config/auth.config";

export const authenticateToken = (
  req: Request | any,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Authentication token required" });
    return;
  }

  try {
    const decoded = jwt.verify(token, authConfig.jwtSecret || "secret");
    req.user = decoded;
    next();
  } catch (error) {
    //return res.status(403).json({ message: 'Invalid or expired token' });
    next();
  }
};

export const isAuthenticated = (
  req: Request | any,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;

  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  next();
};
