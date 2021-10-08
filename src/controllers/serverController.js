const person = require('../models/person');

let users = [
  { id: 1, nombre: "Gerencias", apellido: "Beltran" },
  { id: 2, nombre: "isadora", apellido: "Montiel" },
  { id: 3, nombre: "Carlos", apellido: "Castro" },
  { id: 4, nombre: "Laureano", apellido: "Gomez" },
];

class ServerController {
  constructor() {}
  //Consulta mongodb
  // register(req, res) {
  //     person.create(req.body, (error,data)=>{
  //         if(error){
  //             //next(error)
  //             res.status(500).send();
  //         } else{
  //             res.status(201).json(data);
  //         }
  //     });
  // }

  // Arreglos
  register(req, res) { //Request, response
    //obtener datos
    let { id, nombre, apellido } = req.body;
    console.log("usuario registrado con exito");
    console.table({ id, nombre, apellido });
    users.push(req.body);
    res.status(200).json({
      message: "usuario registrado con exito",
    });
  }

  //   update(req, res) {
  //     let { id, nombre, apellido, edad, email } = req.body;
  //     let obj = { nombre, apellido, edad, email };
  //     person.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
  //       if (error) {
  //         res.status(500).send();
  //       } else {
  //         res.status(200).json(data);
  //       }
  //     });
  //   }

  // Arreglos
  update(req, res) {
    let { id, nombre, apellido } = req.body;
    console.table({ id, nombre, apellido });

    users.forEach((Element) => {
      if ((id) => Element.id) {
        Element.nombre = nombre;
        Element.apellido = apellido;
      }
    });

    if (users != null) {
      res.status(200).json(users);
    } else {
      res.status(400).json({ message: "Usuario no encontrado" });
    }
  }

  //   deleteUser(req, res) {
  //     let { id } = req.body;
  //     person.findByIdDelete(id, (error, data) => {
  //       if (error) {
  //         res.status(500).send();
  //       } else {
  //         res.status(200).json(data);
  //       }
  //     });
  //   }

  // Arreglos
  deleteUser(req, res) {
    let { id } = req.body;
    console.table({ id });

    let tempUser = [];
    users.forEach((Element) => {
      if (id != Element.id) {
        tempUser.push(Element);
      }
    });

    // users = tempUser;
    // console.log(users.length + "-" + tempUser.length)
    // if (users != null) {
    if (users.length != tempUser.length) {
      res.status(200).json(tempUser);
    } else {
      res.status(400).json({ message: "Usuario no encontrado" });
    }
  }

  //   getUsers(req, res) {
  //     let id = req.params.id;
  //     person.findById(id, (error, data) => {
  //       if (error) {
  //         res.status(500).send();
  //       } else {
  //         res.status(200).json(data);
  //       }
  //     });
  //   }

  // Arreglos
  getUsers(req, res) {
    let id = req.params.id;
    let userResp = null;
    users.forEach((Element) => {
      if (id == Element.id) {
        userResp = Element;
      }
    });

    if (userResp != null) {
      res.status(200).json(userResp);
    } else {
      res.status(400).json({ message: "Usuario no encontrado" });
    }
  }

  getAllUsers(req, res) {
    res.status(200).json(users);
  }

//   getAllUsers(req, res) {
//     person.find((error, data) => {
//       if (error) {
//         res.status(500).send();
//       } else {
//         res.status(200).json(data);
//       }
//     });
//   }
}

exports.default = ServerController;