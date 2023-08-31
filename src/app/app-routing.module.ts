import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { TableComponent } from './components/pages/table/table.component';
import { GameComponent } from './components/pages/game/game.component';
import { AdminComponent } from './components/pages/admin/admin.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "register", component: RegisterComponent},
  { path: "login", component: LoginComponent},
  { path: "game", component: GameComponent},
  { path: "table", component: TableComponent},
  { path: "admin", component: AdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
