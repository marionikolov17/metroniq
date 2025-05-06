import { MongooseError } from "mongoose";
import CustomError from "./error";

export const handler = (method: (...args: any[]) => Promise<any>) => {
  return async (...args: any[]) => {
    try {
      return await method(...args);
    } catch (error: unknown) {
      console.error("Service error:", error);

      if (error instanceof Error) {
        if (error.name === "ValidationError") {
          const validationError = error as any;
          const messages = Object.values(validationError.errors).map(
            (err: any) => err.message,
          );
          throw CustomError.BadRequest(messages.join(", "));
        }

        if (error.name === "CastError") {
          const castError = error as any;
          throw CustomError.BadRequest(
            `Invalid ${castError.path}: ${castError.value}`,
          );
        }

        if (error instanceof MongooseError && (error as any).code === 11000) {
          throw CustomError.BadRequest("Duplicate entry found");
        }

        if (error instanceof MongooseError) {
          throw CustomError.BadRequest(error.message);
        }

        throw new CustomError(error.message, 500);
      }

      throw CustomError.InternalServerError();
    }
  };
};
