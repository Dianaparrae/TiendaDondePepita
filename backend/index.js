let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let port = process.env.PORT || 3001;
let app = express();
let usuarioRoutes = require("./routes/usuario");
let Producto = require("./routes/producto");
let Stock = require("./routes/stock");

mongoose.connect(
  "mongodb://localhost:27017/tiendaDondePepita",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Servidor DB: Encendido");
      app.listen(port, function () {
        console.log("Servidor Backend funcionando en el puerto :" + port);
      });
    }
  }
);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
  res.header('Content-Type: application/json');
  res.header('Access-Control-Allow-Origin','*'); 
  res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
  res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
  next();
});



app.use("/api", usuarioRoutes);
app.use("/api", Producto);
app.use("/api", Stock);

module.exports = app;
