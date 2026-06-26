import app from "./app";
import sequelize from "./config/database";

const port = 8080;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");

        await sequelize.sync();

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to database:", error);
    }
}

startServer();