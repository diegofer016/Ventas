import { Component, OnInit } from "@angular/core";
import { ApiauthService } from "../services/apiauth.services";
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({ 
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
    //public email: string = "";
    //public password: string = "";
   /*  public loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    }); */
    public loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
    constructor(public apiauthService: ApiauthService,
        private router: Router,
        private formBuilder: FormBuilder
        ){
        /* if (this.apiauthService.usuarioData){
            this.router.navigate(['/']);
        } */
    }
    ngOnInit(): void {

    }

    login(){
        console.log(this.loginForm.value);
        this.apiauthService.login(this.loginForm.value).subscribe(response =>{
            if(response.exito ===1){
                this.router.navigate(['/']);
            }
        });
    }
}