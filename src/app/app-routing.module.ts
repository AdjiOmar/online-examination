import { ListModuleComponent } from './components/list-module/list-module.component';
import { ListFormateurComponent } from './components/list-formateur/list-formateur.component';
import { ListApprenantComponent } from './components/list-apprenant/list-apprenant.component';
import { CreateFormateurComponent } from './components/create-formateur/create-formateur.component';
import { CreateApprenantComponent } from './components/apprenants/create-apprenant/create-apprenant.component';
import { RegisterComponent } from './components/register/register.component';
import { ApprenantComponent } from './components/apprenant/apprenant.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'apprenant', component: ApprenantComponent },
  {path: 'list-apprenant', component: ListApprenantComponent },

  {path: 'create-apprenant', component: CreateApprenantComponent },
  { path: 'create-formateur', component: CreateFormateurComponent },
  { path: 'list-formateur', component: ListFormateurComponent },
  {path: 'list-module', component: ListModuleComponent}, 


  //{path: 'apprenant', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
