import { RegisterComponent } from './components/register/register.component';
import { ListModuleComponent } from './components/list-module/list-module.component';
import { ListGroupeComponent } from './components/list-groupe/list-groupe.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApprenantComponent } from './components/apprenant/apprenant.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateApprenantComponent } from './components/apprenants/create-apprenant/create-apprenant.component';
import { FormsModule } from '@angular/forms';
import { ListApprenantComponent } from './components/list-apprenant/list-apprenant.component';
import { ListFormateurComponent } from './components/list-formateur/list-formateur.component';
import { ListSeanceComponent } from './components/list-seance/list-seance.component';
import { ListEvaluationComponent } from './components/list-evaluation/list-evaluation.component';
import { ListFormationComponent } from './components/list-formation/list-formation.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { CreateFormateurComponent } from './components/create-formateur/create-formateur.component';
import { CreateFormationComponent } from './components/create-formation/create-formation.component';
import { CreateModuleComponent } from './components/create-module/create-module.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { CreateEvaluationComponent } from './components/create-evaluation/create-evaluation.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListQuestionComponent } from './components/list-question/list-question.component';
import { EvaluationApprenantComponent } from './components/evaluation-apprenant/evaluation-apprenant.component';
import { DetailsEvaluationComponent } from './components/details-evaluation/details-evaluation.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { ModuleApprenantComponent } from './components/module-apprenant/module-apprenant.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    ApprenantComponent,
    CreateApprenantComponent,
    ListApprenantComponent,
    ListFormateurComponent,
    ListSeanceComponent,
    ListEvaluationComponent,
    ListFormationComponent,
    ListGroupeComponent,
    ListModuleComponent,
    UtilisateurComponent,
    CreateFormateurComponent,
    CreateFormationComponent,
    CreateModuleComponent,
    FormateurComponent,
    CreateEvaluationComponent,
    CreateQuestionComponent,
    ListQuestionComponent,
    EvaluationApprenantComponent,
    DetailsEvaluationComponent,
    ResultatComponent,
    ModuleApprenantComponent,
    EvaluationComponent,
    MessageComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
