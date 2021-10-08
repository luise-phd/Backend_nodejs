const express = require('express');
const ServerController = require("../controllers/serverController");

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.confing();
    }

    confing(){
        const objServerC = new ServerController.default();
        this.router.get("/users", objServerC.getAllUsers);
        this.router.get("/users/:id", objServerC.getUsers);
        this.router.post("/users", objServerC.register);
        this.router.put("/users", objServerC.update);
        this.router.delete("/users", objServerC.deleteUser);
    }
}

exports.default = ServerRouter;