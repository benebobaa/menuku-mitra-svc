import express from 'express';
import { MitraController } from '../controller/mitra-controller';


export const publicRouter =  express.Router();
publicRouter.post("/api/login", MitraController.login);
publicRouter.post("/api/register", MitraController.register);
