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

   userName: any;
   password: any;
   formData!: FormGroup;

   constructor(private authService: AuthService, private router: Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl("", [Validators.email,Validators.required]),
         password: new FormControl("", [Validators.required,Validators.minLength(3)])
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

      this.authService.login(this.userName, this.password)
         .subscribe(data => {
            if (data) this.router.navigate(['/home']).then(() => {
               window.location.reload();
            });
         });
   }

}
