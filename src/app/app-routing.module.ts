import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { ModuleApprenantComponent } from './components/module-apprenant/module-apprenant.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { DetailsEvaluationComponent } from './components/details-evaluation/details-evaluation.component';
import { EvaluationApprenantComponent } from './components/evaluation-apprenant/evaluation-apprenant.component';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { ListEvaluationComponent } from './components/list-evaluation/list-evaluation.component';
import { CreateEvaluationComponent } from './components/create-evaluation/create-evaluation.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { CreateModuleComponent } from './components/create-module/create-module.component';
import { ListModuleComponent } from './components/list-module/list-module.component';
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
    {path: 'evaluation' , component :EvaluationComponent},

  {path: 'evaluation/:id' , component :EvaluationComponent},
  {path: 'resultat' , component :ResultatComponent},
  {path: 'module-apprenant/:id' , component : ModuleApprenantComponent},
  {path: 'details-evaluation/:id' , component: DetailsEvaluationComponent},
  {path: 'evaluation-apprenant/:id', component: EvaluationApprenantComponent},
  {path: 'list-question/:id', component: ListQuestionComponent},
  {path: 'create-question', component: CreateQuestionComponent },
  {path: 'update-question/:id', component: CreateEvaluationComponent },
  {path: 'update-evaluation/:id', component: CreateEvaluationComponent },
  {path: 'list-evaluation', component: ListEvaluationComponent },
  {path: 'create-evaluation', component: CreateEvaluationComponent },
  {path: 'formateur', component: FormateurComponent},
  {path: 'login', component: LoginComponent},
  {path: 'apprenant', component: ApprenantComponent },
  {path: 'list-apprenant', component: ListApprenantComponent },
  {path: 'create-apprenant', component: CreateApprenantComponent },
  {path: 'create-formateur', component: CreateFormateurComponent },
  {path: 'create-formation', component: CreateFormationComponent },
  {path: 'list-formation', component: ListFormationComponent},
  {path: 'list-formateur', component: ListFormateurComponent},
  {path: 'list-module', component: ListModuleComponent},
  {path: 'create-module', component: CreateModuleComponent },
  { path: 'update-module/:id', component: CreateModuleComponent },
  {path: 'update-apprenant/:id', component: CreateApprenantComponent },
  {path: 'update-formation/:id', component: CreateFormationComponent },
  { path: 'update-formateur/:id', component: CreateFormateurComponent},
  {path: 'update-groupe/:id', component: ListGroupeComponent},
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
