import { Sequelize } from "sequelize";
import config from "./config";

const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
    logging: false,
  }
);

export default sequelize;
