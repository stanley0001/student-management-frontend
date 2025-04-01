import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
{
    path: 'dashboard',
    component: DashboardComponent,
    children: [
    {
      path: '',
      component: StatisticsComponent
    },
    {
      path: 'student-management',
      component: StudentManagementComponent,
    //   data: { permission: 'CAN_VIEW_STUDENTS' },
    //   canActivate: [PermissionGuard]
     
    },
    { path: 'edit-student/:id', 
      component: StudentManagementComponent,
    //   data: { permission: 'CAN_EDIT_STUDENT' },
    //   canActivate: [PermissionGuard]
     
    },
    {
      path: 'users',
      component: UserManagementComponent,
    //   data: { permission: 'CAN_VIEW_USERS'},
    //   canActivate: [PermissionGuard]
    },
    {
      path: 'profile',
      component: UserProfileComponent
    },
    { path: 'users/:id', 
      component: UserProfileComponent
    },
    { path: '**', redirectTo: '' }
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: 'auth/reset/:id', component: AuthComponent },
  { path: '**', redirectTo: '/auth' }
];
