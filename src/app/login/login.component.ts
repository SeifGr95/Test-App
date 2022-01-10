import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const user = `abc`;
const pass = `123`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  loginUser() {
    let userRaw = localStorage.getItem('userData'); 
    if(userRaw)
    {
      let userData = JSON.parse(userRaw) ; 

        if(userData.email==this.loginForm.value['email']&& userData.password==this.loginForm.value['password'])
        {
          //alert("Mar7bééé !!")
          this.router.navigateByUrl('/blog') ; 
        }else {
          alert("!!")
        }
    }
  }
}
