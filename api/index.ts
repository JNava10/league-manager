require('dotenv').config()

import express from 'express'
import {initRoutes} from "./router";

const app = express()
const port = process.env.PORT || 3000;

export const start = async () => {
    await initRoutes(app);
    listenServer();
}

const listenServer = () => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
};

start().catch((err) => {})


