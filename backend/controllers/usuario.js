let Usuario = require("../models/usuario");
let bcrypt = require("bcrypt-nodejs");
let jwt = require("../libs/jwt");

const registrarUsuario = (req, res) => {
  let params = req.body;
  let usuario = new Usuario();
  if (
    params.nombres &&
    params.apellidos &&
    params.rol &&
    params.edad &&
    params.correoElectronico &&
    params.password
  ) {
    bcrypt.hash(params.password, null, null, (err, hash) => {
      if (hash) {
        usuario.nombres = params.nombres;
        usuario.apellidos = params.apellidos;
        usuario.rol = params.rol;
        usuario.edad = params.edad;
        usuario.correoElectronico = params.correoElectronico;
        usuario.password = hash;
        usuario.save((err, saveUsuario) => {
          if (err) {
            res.status(500).send({ err: "No se registro el usuario" });
          } else {
            res.status(200).send({ usuario: saveUsuario });
          }
        });
      }
    });
  } else {
    res
      .status(405)
      .send({ err: "Faltaron campos por llenar para registar el usuario" });
  }
};

const login = (req, res) => {
  let params = req.body;
  Usuario.findOne(
    { correoElectronico: params.correoElectronico },
    (err, datosUsuario) => {
      if (err) {
        res.status(500).send({ mensaje: "Error del servidor" });
      } else {
        if (datosUsuario) {
          bcrypt.compare(
            params.password,
            datosUsuario.password,
            (err, confirm) => {
              if (confirm) {
                if (params.getToken) {
                  res.status(200).send({
                    jwt: jwt.createToken(datosUsuario),
                  });
                } else {
                  res
                    .status(200)
                    .send({ Usuario: datosUsuario, mensaje: "Sin Token" })
                }
              } else {
                res.status(401).send({ mensaje: "Correo o Contraseña incorrectos"});
            }
            });
        } else {
          res.status(401).send({ mensaje: "Correo o Contraseña incorrectos"});
      }
    }
    });
};
module.exports = {
  registrarUsuario,
  login,
};
