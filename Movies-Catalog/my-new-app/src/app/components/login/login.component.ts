import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username: any;
   password: any;
   formData!: FormGroup;
   isUserLoggedIn: boolean = false;


   constructor(private authService: AuthService, private router: Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         username: new FormControl("", [Validators.email,Validators.required]),
         password: new FormControl("", [Validators.required,Validators.minLength(3)])
      });
   }

   onClickSubmit(data: any) {
      this.username = data.username;
      this.password = data.password;

      this.authService.login(this.username, this.password , data)
         .subscribe(dataa => {
            
            console.log(dataa.token);
            this.isUserLoggedIn = dataa.token.length > 0;
            localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
            localStorage.setItem('token', dataa.token+"");
            if (dataa) this.router.navigate(['/home/1']).then(() => {
               window.location.reload();
            });
         });
   }

}
