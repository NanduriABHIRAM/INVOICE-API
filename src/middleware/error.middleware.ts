import { ErrorRequestHandler } from "express";

type HttpError = Error & {
    status?: number;
    statusCode?: number;
};

const errorMiddleware: ErrorRequestHandler = (
    error: HttpError,
    _req,
    res,
    _next,
) => {
    console.error(error);

    const statusCode = error.statusCode || error.status || 500;
    const message =
        statusCode >= 500 ? "Internal Server Error" : error.message;

    res.status(statusCode).json({
        success: false,
        message,
    });
};

export default errorMiddleware;
