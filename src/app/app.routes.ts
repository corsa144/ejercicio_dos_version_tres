import { Routes } from '@angular/router';
import { BienvenidaComponent } from './component/bienvenida/bienvenida.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';

export const routes: Routes = [
    {
        path: "bienvenida",
        component: BienvenidaComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "bienvenido",
        redirectTo: "bienvenida",
    },
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "**",
        component: ErrorComponent,
    }
];
