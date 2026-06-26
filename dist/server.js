"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config/database"));
const port = 8080;
async function startServer() {
    try {
        await database_1.default.authenticate();
        console.log("Database connected successfully.");
        await database_1.default.sync();
        app_1.default.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error("Failed to connect to database:", error);
    }
}
startServer();
//# sourceMappingURL=server.js.map