import express, { response } from "express";
import knex from "./database/connection";
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();


//Listar Items
//Usamos o async await para queries, pois demoram um pouco para resolver
routes.get("/items", itemsController.index);

//Criar Pontos de Coleta
routes.post("/points", pointsController.create);


//Listar ponto de coleta específico

routes.get('/points/:id', pointsController.show)

routes.get('/points', pointsController.index)

export default routes;
