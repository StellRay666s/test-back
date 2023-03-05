import despositController from "../controllers/deposite.controllers";
import { Router } from "express";

export const depositeRoutes = Router();

depositeRoutes.get("/deposits", despositController.getDeposite);
