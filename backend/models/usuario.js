let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let usuarioSchema = Schema ({
    nombres: String,
    apellidos: String,
    edad: Number,
    rol: String,
    correoElectronico: String,
    password: String,
    fechaRegistro: {type: Date, default: Date.now},
});

module.exports = mongoose.model("usuario", usuarioSchema);