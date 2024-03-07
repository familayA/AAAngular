import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, ReactiveFormsModule,HttpClientModule
  ],
  exports:[LoginComponent]
})
export class UserModule { }
