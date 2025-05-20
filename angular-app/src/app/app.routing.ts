//modulos generales de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { Route } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioIDComponent } from './usuario-id/usuario-id.component';


export const appRoutes: Routes = [
    { path: "usuarios", component: UsuariosComponent },
    { path: "usuario/:id", component: UsuarioIDComponent },
    { path: "**", component: UsuariosComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);