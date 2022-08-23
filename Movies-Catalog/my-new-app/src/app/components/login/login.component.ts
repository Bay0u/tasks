import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   userName: any;
   password: any;
   formData!: FormGroup;

   constructor(private authService: AuthService, private router: Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl("", CustomValidators.email),
         password: new FormControl("", Validators.required),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

      //console.log("Login page username: " + this.userName);
      //console.log("Login page password: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe(data => {
            //console.log("Is Login Success: " + data);
            if (data) this.router.navigate(['/home']).then(() => {
               window.location.reload();
            });
         });
   }

}
