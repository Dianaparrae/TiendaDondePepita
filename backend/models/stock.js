let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let stockSchema = Schema ({
    idProducto: { type: Schema.ObjectId, ref: "producto" },
    cantidad: Number,
    fechaCompra: { type: Date, default: Date.now },
});

module.exports = mongoose.model("stock", stockSchema);