import dotenv from "dotenv";

dotenv.config();

export const authConfig = {
  jwtSecret: process.env.JWT_SECRET,
  accessTokenExpiry: process.env.JWT_ACCESS_EXPIRY,
  refreshTokenExpiry: process.env.JWT_REFRESH_EXPIRY,
  nodeEnv: process.env.NODE_ENV,
};
