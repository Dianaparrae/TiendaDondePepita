import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../../models/usuario";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario;

  constructor(private usuarioService: UsuarioService) { 
    this.usuario = new Usuario('','',0,'','','', false);
  }

  ngOnInit(): void {
  }


login(loginForm: any) {

  if (!loginForm.valid) {
    // Error en los datos
    console.log('Faltan datos obligatorios');
  } else {

    this.usuarioService.login(this.usuario).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('error del response: ', error);
      }
    );
  }
}


}
