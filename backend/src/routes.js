const express = require("express");
const routes = express.Router();

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

routes.get("/ongs", OngController.findAll);
routes.post("/ongs", OngController.create);
routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.findAll);
routes.get("/incidents/find-by-ong", IncidentController.findByOng);
routes.delete("/incidents/:id", IncidentController.delete);
routes.post("/login", ProfileController.login);

module.exports = routes;
