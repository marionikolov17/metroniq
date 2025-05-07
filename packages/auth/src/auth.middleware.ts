import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "./config/auth.config";

export const authenticateToken = (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication token required" });
  }

  try {
    const decoded = jwt.verify(token, authConfig.jwtSecret || "secret");
    req.user = decoded;
    next();
  } catch (error) {
    //return res.status(403).json({ message: 'Invalid or expired token' });
    return next();
  }
};
