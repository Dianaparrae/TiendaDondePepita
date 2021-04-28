let jwt = require("jwt-simple");
let moment = require("moment");
const usuario = require("../models/usuario");
let secret = "Diana24CreaTiendaPepita2021"

exports.createToken = (usuario) => {
let payload = {
    _id: usuario._id,
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    edad: usuario.edad,
    iat: moment().unix(),
};
return jwt.encode(payload, secret);
};