# TiendaDondePepita

## Colecciones 
- usuario
```
{
  "nombre": "String",
  "apellido": "String",
  "edad": number,
  "rol": "String",
  "correoElectronico": "String",
  "password": "String",
  "fechaRegistro": {type: Date, default: Date.now},
}
```
- producto
```
{
   "nombre": "String",
   "descripcion": "String",
   "precio": Number,
}
```
- stock
```
{
  "idProducto": { type: Schema.ObjectId, ref: "producto" },
  "cantidad": Number,
  "fechaCompra": { type: Date, default: Date.now },
}
```
