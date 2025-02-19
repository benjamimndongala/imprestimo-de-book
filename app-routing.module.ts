import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UsarComponent } from './_components/usar/usar.component';

const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'users/list', component: UsersComponent},
  {path: 'users/:username', component: UsersComponent},
  {path: 'usar/details', component: UsarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
