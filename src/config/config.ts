import dotenv from "dotenv";

dotenv.config();

const parsePort = (value: string | undefined, fallback: number) => {
  if (!value) {
    return fallback;
  }

  const port = Number(value);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error(`Invalid port value: ${value}`);
  }

  return port;
};

const config = {
  port: parsePort(process.env.PORT, 8080),
  database: {
    name: process.env.DB_NAME || "invoice_db",
    user: process.env.DB_USER || "invoice_user",
    password: process.env.DB_PASSWORD || "Invoice@123",
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql" as const,
  },
};

export default config;
