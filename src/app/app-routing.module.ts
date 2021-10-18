import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomsComponent } from './features/rooms/rooms.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'rooms', component: RoomsComponent },

  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
