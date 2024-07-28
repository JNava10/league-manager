// @ts-ignore
import * as express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    res.send('About birds')
});

export default router;