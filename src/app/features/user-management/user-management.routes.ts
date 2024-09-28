import { Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';

export const USER_MANAGEMENT_ROUTES: Routes = [
    {
        path: '',
        component: UserManagementComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./components/user-list/user-list.component').then(m => m.UserListComponent)
            }
        ]
    }
]