import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
import { ApiauthService } from './services/apiauth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usuario: Usuario = { email: "", token: ""};

  constructor(public apiauthService: ApiauthService,
        private router : Router   
        ){
        this.apiauthService.usuario.subscribe(res =>{
          this.usuario = res;
          console.log('cambio el objeto '+ res)
        })
  }

logout(){
  this.apiauthService.logout();
  this.router.navigate(['/login']);
}

}
