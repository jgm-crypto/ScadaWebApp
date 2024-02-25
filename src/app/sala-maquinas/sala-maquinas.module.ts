import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { CamarasComponent } from './camaras/camaras.component';
import { CamaraComponent } from './camara/camara.component';
import { CamaraDetalleComponent } from './camara-detalle/camara-detalle.component';
import { SalaMaquinasRoutingModule } from './sala-maquinas-routing.module';

@NgModule({
  imports: [SalaMaquinasRoutingModule],
  exports: [RouterModule],
  declarations: [
    ControlComponent,
    CamarasComponent,
    CamaraComponent,
    CamaraDetalleComponent
  ]
})
export class SalaMaquinasModule { }