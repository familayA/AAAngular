import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public RegisterForm!: FormGroup;
  public registeruser!: User
  // public userName!:string
  constructor(private _userService: UserService) { }
  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "password": new FormControl("", [Validators.required, Validators.minLength(6)]),
      "email":  new FormControl("", [Validators.email]),
      "address": new FormControl("", [ Validators.minLength(3)]),
    })
  }
  save() {
    this._userService.addUser(this.RegisterForm.value).subscribe({
      next: (res) => {
        // console.log(res);
        this.registeruser = res;
        console.log(this.registeruser)
        // if (this.registeruser != null) {
        //   // this.checkPassword()
        //   console.log("inside check");

        // }
        // //אחרת שלח לרג'סטר
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  // checkPassword() {
  //   if (this.user.password == this.LoginForm.value.password) {
  //     console.log("go to recipy");
  //   }
  //   else {
  //     console.log("errory");

  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Paswword Incorrect!!!",
  //       // footer: '<a href="#">Why do I have this issue?</a>'
  //     });
  //   }
  // }

}


