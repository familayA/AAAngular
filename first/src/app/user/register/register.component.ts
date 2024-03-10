import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  public name2!: User
  private timerInterval: any;
  private timer: any;


  // public userName!:string

  constructor(private _userService: UserService, private router: Router) { }
  ngOnInit(): void {
    var isGet = sessionStorage.getItem('isGetFromLogin')
    if (isGet == 'true') {
      console.log("good")
      this.RegisterForm = new FormGroup({
        "name": new FormControl(sessionStorage.getItem('name'), [Validators.required, Validators.minLength(3)]),
        "password": new FormControl("", [Validators.required, Validators.minLength(6)]),
        "email": new FormControl("", [Validators.email]),
        "address": new FormControl("", [Validators.minLength(3)]),
      })
    }
    else {
      this.RegisterForm = new FormGroup({
        "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
        "password": new FormControl("", [Validators.required, Validators.minLength(6)]),
        "email": new FormControl("", [Validators.email]),
        "address": new FormControl("", [Validators.minLength(3)]),
      })
    }
  }
  save() {
    console.log("log====", this._userService.getUserByName(this.RegisterForm.value.name))
    this._userService.getUserByName(this.RegisterForm.value.name).subscribe({
      next: (res) => {
        console.log("res", res);
        this.name2 = res;
        console.log("name2", this.name2)
        if (this.name2 != null) {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "User registered in the system, transferred to the login page!!!",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
          sessionStorage.setItem('name', this.RegisterForm.value.name);
          sessionStorage.setItem('isGetFromRgister', 'true')
          this.router.navigate(["user/login"])
        }
        else {
          this._userService.addUser(this.RegisterForm.value).subscribe({
            next: (res) => {
              // console.log(res);
              this.registeruser = res;
              console.log(this.registeruser)
              Swal.fire({
                title: 'you register!!!!',
                html: 'Transferred to show the recipes',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading(null);
                  this.timer = Swal
                  this.timerInterval = setInterval(() => {
                    this.timer.textContent = `${Swal.getTimerLeft()}`;
                  }, 100);
                },
                willClose: () => {
                  clearInterval(this.timerInterval);
                }
              }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log('I was closed by the timer');
                }
              });
              this.router.navigate(["recipe"])


            },
            error: (err) => {
              console.log(err);

            }
          })
        }

      },
      error: (err) => {
        console.log(err);

      }
    })

  }

}


