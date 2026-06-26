import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "invoice_db",
  "invoice_user",
  "Invoice@123",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;