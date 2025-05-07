import jwt from "jsonwebtoken";
import { authConfig } from "./config/auth.config";

export class AuthService {
  private readonly JWT_SECRET = authConfig.jwtSecret || "secret";
  private readonly TOKEN_EXPIRY = authConfig.tokenExpiry || "15m";

  async generateTokens(userId: string) {
    const token = jwt.sign({ userId }, this.JWT_SECRET, {
      expiresIn: this.TOKEN_EXPIRY as jwt.SignOptions["expiresIn"],
    });

    return token;
  }

  async validateToken(token: string) {
    try {
      return jwt.verify(token, this.JWT_SECRET);
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}
