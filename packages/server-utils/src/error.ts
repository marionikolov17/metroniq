class CustomError extends Error {
  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message);
  }

  static BadRequest(message: string) {
    return new CustomError(message, 400);
  }

  static NotFound(message: string) {
    return new CustomError(message, 404);
  }

  static InternalServerError() {
    return new CustomError("Internal Server Error", 500);
  }

  static Unauthorized(message: string) {
    return new CustomError(message, 401);
  }

  static Forbidden(message: string) {
    return new CustomError(message, 403);
  }
}

export default CustomError;
