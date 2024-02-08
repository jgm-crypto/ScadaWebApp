import { NgModule } from '@angular/core';
import { CamarasComponent } from './camaras/camaras.component';
import { CamaraComponent } from './camara/camara.component';
import { CamaraDetalleComponent } from './camara-detalle/camara-detalle.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camaras',
    pathMatch: 'full'
  },
  {
    path: 'camaras',
    component: CamarasComponent,
    children: [
      {
        path: 'camara',
        component: CamaraComponent,
        children: [
          {
            path: 'camara-detalle',
            component: CamaraDetalleComponent
          }
        ]
      }
    ]
  },
  // ... otras rutas hijas de control ...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaMaquinasModule { }