import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { RegisterComponent } from './home/register/register.component';

import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'listTask',
    component:ListTaskComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'saveTask',
    component:SaveTaskComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'listRole',
    component:ListRoleComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'listUser',
    component:ListUserComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'registerRole',
    component:RegisterRoleComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'registerUser',
    component:RegisterUserComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'updateRole',
    component:UpdateRoleComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'updateUser',
    component:UpdateUserComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'singUp',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
