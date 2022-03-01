import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ListTaskComponent } from './board/list-task/list-task.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'listTask',
    component:ListTaskComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
