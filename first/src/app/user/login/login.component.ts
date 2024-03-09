import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.class';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public LoginForm!: FormGroup;
  public user!: User
  constructor(private _userService: UserService, private router: Router) { }
  ngOnInit(): void {
    var isGet = sessionStorage.getItem('isGetFromRgister')
    if (isGet == 'true') {
      console.log("goodLogin")
      this.LoginForm = new FormGroup({
        "name": new FormControl(sessionStorage.getItem('name'), [Validators.required, Validators.minLength(3)]),
        "password": new FormControl("", [Validators.required, Validators.minLength(6)]),
        
      })
    }
    else{
      this.LoginForm = new FormGroup({
        "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
        "password": new FormControl("", [Validators.required, Validators.minLength(6)]),
        
      })
    }
    sessionStorage.setItem('isGetFromLogin', 'false')
  }
  login() {
    this._userService.getUserByName(this.LoginForm.value.name).subscribe({
      next: (res) => {
        // console.log(res);
        this.user = res;
        console.log(this.user)
        if (this.user != null) {
          this.checkPassword()
          console.log("inside check");

        }
        else {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "User does not exist yet, transferred to registration page!!!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
          sessionStorage.setItem('name', this.LoginForm.value.name);
          sessionStorage.setItem('isGetFromLogin', 'true')
          this.router.navigate(["user/register"])

        }
        //אחרת שלח לרג'סטר
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  checkPassword() {
    if (this.user.password == this.LoginForm.value.password) {
      console.log("go to recipy");
    }
    else {
      console.log("errory");

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Paswword Incorrect!!!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }

}
