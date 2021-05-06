export class Usuario {

    constructor(
      public nombres: String,
      public apellidos: String,
      public edad: Number,
      public rol: String,
      public correoElectronico: String,
      public password: String,
      public getToken: boolean,
    ) {}
  }
  