import { Routes } from '@angular/router';
import { TaskPageComponent } from './task/pages/task-page/task-page.component';
import { ParentComponent } from './pruebaInput/parent/parent.component';

export const routes: Routes = [
    {
        path: 'home',
        component: TaskPageComponent
    },
    {
        path: 'tasks',
        component: TaskPageComponent
    },
    {
        path: 'inputPrueba',
        component: ParentComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
