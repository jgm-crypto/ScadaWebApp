import { CamarasComponent } from './camaras/camaras.component';
import { CamaraComponent } from './camara/camara.component';
import { CamaraDetalleComponent } from './camara-detalle/camara-detalle.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: ControlComponent,
        children: [
            { path: '', redirectTo: 'camaras', pathMatch: 'full' },
            {
                path: 'camaras',
                component: CamarasComponent
            },
            {
                path: 'camara',
                component: CamaraComponent
            },
            {
                path: 'camara-detalle',
                component: CamaraDetalleComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalaMaquinasRoutingModule { }
