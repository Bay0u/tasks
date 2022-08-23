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

   formData!: FormGroup;

   constructor(private authService: AuthService, private router: Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         username: new FormControl("",Validators.required),
         password: new FormControl("",Validators.required)
      });
   }
   get username() { return this.formData.get('username'); }

   get password() { return this.formData.get('password'); }

   onClickSubmit(data: any) {
      const username = data.username;
      const password = data.password;
      //console.log("Login page username: " + this.userName);
      //console.log("Login page password: " + this.password);

      this.authService.login(username, password)
         .subscribe(data => {
            //console.log("Is Login Success: " + data);
            if (data) this.router.navigate(['/home']).then(() => {
               window.location.reload();
            });
         });
   }

}
