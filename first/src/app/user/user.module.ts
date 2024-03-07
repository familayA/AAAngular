import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2'
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule, ReactiveFormsModule,HttpClientModule,UserRoutingModule
  ],
  exports:[LoginComponent,RegisterComponent]
})
export class UserModule { }
