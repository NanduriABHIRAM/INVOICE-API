import app from "./app";
import config from "./config/config";
import sequelize from "./config/database";

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");

        await sequelize.sync();

        app.listen(config.port, () => {
            console.log(`Server running on http://localhost:${config.port}`);
        });
    } catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1);
    }
}

startServer();
