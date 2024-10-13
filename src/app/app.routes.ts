import { Routes } from '@angular/router';
import { ProduccionHuevosFormComponent } from './produccion-huevos-form/produccion-huevos-form.component';
import { ProduccionHuevosListComponent } from './produccion-huevo-listado/produccion-huevo-listado.component';

export const routes: Routes = [
    { 
        path: '',
        component: ProduccionHuevosListComponent
    },
    { 
        path: 'crear',
        component: ProduccionHuevosFormComponent
    },

];
