import { ListFormationComponent } from './components/list-formation/list-formation.component';
import { ListSeanceComponent } from './components/list-seance/list-seance.component';
import { ListFormateurComponent } from './components/list-formateur/list-formateur.component';
import { ListApprenantComponent } from './components/list-apprenant/list-apprenant.component';
// import { CreateFormateurComponent } from './create-formateur/create-formateur.component';
import { CreateApprenantComponent } from './components/apprenants/create-apprenant/create-apprenant.component';
import { RegisterComponent } from './components/register/register.component';
import { ApprenantComponent } from './components/apprenant/apprenant.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGroupeComponent } from './components/list-groupe/list-groupe.component';
import { CreateFormateurComponent } from './components/create-formateur/create-formateur.component';
import { CreateFormationComponent } from './components/create-formation/create-formation.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'apprenant', component: ApprenantComponent },
  {path: 'list-apprenant', component: ListApprenantComponent },

  { path: 'create-apprenant', component: CreateApprenantComponent },
  { path: 'create-formateur', component: CreateFormateurComponent },
  { path: 'create-formation', component: CreateFormationComponent },
    {path: 'list-formation', component: ListFormationComponent},


  {path: 'list-formateur', component: ListFormateurComponent },
  {path: 'list-groupe', component: ListGroupeComponent },
  {path: 'list-seance', component: ListSeanceComponent},
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
