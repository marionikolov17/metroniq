import jwt from "jsonwebtoken";
import { authConfig } from "./config/auth.config";

export class AuthService {
  private readonly JWT_SECRET = authConfig.jwtSecret || "secret";
  private readonly ACCESS_TOKEN_EXPIRY = authConfig.accessTokenExpiry || "15m";
  private readonly REFRESH_TOKEN_EXPIRY = authConfig.refreshTokenExpiry || "7d";

  async generateTokens(userId: string) {
    const accessToken = jwt.sign({ userId }, this.JWT_SECRET, {
      expiresIn: this.ACCESS_TOKEN_EXPIRY as jwt.SignOptions["expiresIn"],
    });

    const refreshToken = jwt.sign({ userId }, this.JWT_SECRET, {
      expiresIn: this.REFRESH_TOKEN_EXPIRY as jwt.SignOptions["expiresIn"],
    });

    return { accessToken, refreshToken };
  }

  async validateToken(token: string) {
    try {
      return jwt.verify(token, this.JWT_SECRET);
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}
