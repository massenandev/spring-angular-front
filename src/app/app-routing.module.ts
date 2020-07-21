import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AlluserComponent } from './alluser/alluser.component';
import { RegistersComponent } from './registers/registers.component';
import { LoginappComponent } from './loginapp/loginapp.component';


const routes: Routes = [
  {
    path:"", redirectTo: "loginapp", pathMatch: "full"
  },
  {
    path:"search", component: SearchComponent
  },
  {
    path:"all-users", component: AlluserComponent
  },
  {
    path:"register", component: RegistersComponent
  },
  {
    path:"loginapp", component: LoginappComponent
  },
  {
    path:"**", component: LoginappComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
