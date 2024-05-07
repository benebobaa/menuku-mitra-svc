import express from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api";
import path from "path";

export const web = express();   
web.use(express.json());
web.use('/public/images', express.static('public/images'))
web.use(publicRouter);
web.use(apiRouter);
web.use(errorMiddleware)
