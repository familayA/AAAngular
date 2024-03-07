import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(c => c.UserModule) },
    // { path: 'login', loadComponent: () => import('./user/login/login.component').then(c => c.LoginComponent) },
    // { path: 'register', loadComponent: () => import('./user/register/register.component').then(c => c.RegisterComponent) },
];
