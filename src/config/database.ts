import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "invoice_db",
    "root",
    "password",
    {
        host: "localhost",
        dialect: "mysql",
    }
);

export default sequelize;