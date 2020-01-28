import { Router } from "express";
import User from "./app/models/User";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

// O Middleware só vai ser chamado para as rotas que estão a baixo
routes.use(authMiddleware);

routes.put("/users", UserController.update);

export default routes;
