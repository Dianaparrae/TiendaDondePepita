let Producto = require("../models/producto");

const registrarProducto = (req, res) => {
    let params = req.body;
    let producto = new Producto ();
    producto.nombre = params.nombre;
    producto.descripcion = params.descripcion;
    producto.precio = params.precio;
    producto.save ((err, saveProducto) => {
        if (err) {
            res.status(500).send({ mensaje: "Error al conectar al servidor"});
        } else {
            if (saveProducto) {
                res.status(200).send({ producto: saveProducto});
            } else {
                res.status(401).send({ mensaje: "No se pudo registrar el producto"});
            }
        }
    });
};

const buscarProducto = (req, res) => {
    let id = req.params["id"];
    Producto.findById({ _id: id}, (err, datosProducto) =>{
        if (err) {
            res.status(500).send({ mensaje: "Error al conectar al servidor"});
        } else {
            if (datosProducto) {
                res.status(200).send({ producto: datosProducto});
            } else {
                res.status(401).send({ mensaje: "El producto no existe"});
            }
        }
    });
};

const listarProducto = (req, res) =>{
    let nombre = req.params["nombre"];
    Producto.find({ nombre: new RegExp (nombre, "i") }, (err, datosProducto) => {
        if (err) {
            res.status(500).send({ mensaje: "Error al conectar al servidor"});
        } else {
            if (datosProducto) {
                res.status(200).send({ producto: datosProducto});
            } else {
                res.status(401).send({ mensaje: "No hay productos"});
            }
        }
    });
};


const editarProducto = (req, res) => {
    let id = req.params["id"];
    let params = req.body;
    Producto.findByIdAndUpdate({ _id: id}, {nombre: params.nombre, descripcion: params.descripcion, precio: params.precio}, (err, datosProducto) => {
        if (err) {
            res.status(500).send({ mensaje: "Error al conectar al servidor"});
        } else {
            if (datosProducto) {
                res.status(200).send({ producto: datosProducto});
            } else {
                res.status(401).send({ mensaje: "No se pudo editar el producto"});
            }
        }
    });
};
  

  const eliminarProducto = (req, res) => {
    let id = req.params["id"];
    Producto.findByIdAndDelete({ _id: id }, (err, datosProducto) => {
        if (err) {
            res.status(500).send({ mensaje: "Error al conectar al servidor"});
        } else {
            if (datosProducto) {
                res.status(200).send({ producto: datosProducto});
            } else {
                res.status(401).send({ mensaje: "El producto no se pudo eliminar"});
            }
        }
    });
};

module.exports ={
    registrarProducto,
    buscarProducto,
    listarProducto,
    editarProducto,
    eliminarProducto,
};