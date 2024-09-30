import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {
        path: 'users',
        loadChildren: () => import('./features/user-management/user-management.routes').then(m => m.USER_MANAGEMENT_ROUTES)
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];
