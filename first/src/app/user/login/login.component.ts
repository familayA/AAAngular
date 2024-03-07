import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.class';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public LoginForm!: FormGroup;
  public user!:User
  // public userName!:string
  constructor( private _userService:UserService) { }
  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      "name": new FormControl("", [Validators.required, Validators.minLength(9)]),
      "password": new FormControl("", [Validators.required, Validators.minLength(3)]),
      
      // "outOfStock": new FormControl(true)
    })
  }
  login(){
    this._userService.getUserByName(this.LoginForm.value.name).subscribe({
      next: (res) => {
        console.log(res);
        this.user=res;
      },
      error: (err) => {
        console.log(err);

      }
    })


  }

}
