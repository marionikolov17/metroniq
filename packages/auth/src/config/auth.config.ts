import dotenv from "dotenv";

dotenv.config();

export const authConfig = {
  jwtSecret: process.env.JWT_SECRET,
  tokenExpiry: process.env.JWT_TOKEN_EXPIRY,
};
