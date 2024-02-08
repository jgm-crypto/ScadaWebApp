import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'control',loadChildren: () => import('./sala-maquinas/sala-maquinas.module').then(m => m.SalaMaquinasModule)},
  { path: 'graficos', loadChildren: () => import('./graficas/graficas.module').then(m => m.GraficasModule) },
  { path: '**', redirectTo: '' } // Redirige cualquier ruta no encontrada a la página de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
