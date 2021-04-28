let Stock = require("../models/stock");

const registroStock = (req, res) => {
    let params = req.body;
    let stock = new Stock ();
    
    stock.idProducto = params.idProducto;
    stock.cantidad = params.cantidad;
    
    if (
        params.idProducto &&
        params.cantidad
    ) {
    stock.save((err, saveStock) => {
        if (err) {
            res.status(500).send({ err: "No se registro el producto en Stock"});
        } else {
            res.status(200).send({ stock: saveStock });
        }
    });
}   else {
        res.status(405).send({err: "No se guardo el producto"});
    };
};

module.exports = {
    registroStock,
};