import express from "express";
import controller from "../controller/index.js";

export const routes = express();

routes.get("/api", controller.getList);
