// Importar express
const express = require("express");
const serverRouter = require("./routers/serverRouter");
//Para instalar mongoose.
const mongoose = require("mongoose");
//importar url de conexion de la BD
const database = require("./database/db");

class server {
  // constructor
  constructor() {
    this.conectarBD();
    this.app = express();
    // Indicar el puerto por el que se ejecutara el servidor
    this.app.set("port", process.env.PORT || 3000);
    //Indicar que las solicitudes http se trabajara con JSON
    this.app.use(express.json());
    /**
     *
     * **************Rutas**********
     *
     */
    const router = express.Router();
    router.get("/", (req, res) => {
      console.log("Nueva conexion");
      res.status(200).json({ message: "Hola mundo!" });
    });
    const serverR = new serverRouter.default();

    //Añadir las rutas al servidor
    this.app.use(serverR.router);
    this.app.use(router);
    //Levantar el servidor/correr el servidor
    this.app.listen(this.app.get("port"), () => {
      console.log("servidor corriendo en el puerto =>", this.app.get("port"));
    });
  }

  conectarBD() {
    mongoose
      .connect(database.db)
      .then(() => {
        console.log("coneccion a BD con exito");
      })
      .catch((err) => {
        console.error("Error de conexion");
      });
  }
}

const objServer = new server();
