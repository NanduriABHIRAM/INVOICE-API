"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("invoice_db", "invoice_user", "Invoice@123", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map