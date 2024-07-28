import {AppDataSource} from "./data-source";
import {config} from "dotenv";

config()

// @ts-ignore
import * as express from "express";
import {initRoutes} from "./router";

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize().then(async () => {
    await initRoutes(app);
    listenServer();
}).catch(error => console.log(error))

const listenServer = () => {
    app.listen(port, () => {
        console.log(`API listening on http://localhost:${port}`);
    })
};