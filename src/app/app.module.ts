import { ListGroupeComponent } from './components/list-groupe/list-groupe.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApprenantComponent } from './components/apprenant/apprenant.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ApprenantComponent,
    RegisterComponent,
    CreateApprenantComponent,
    ListApprenantComponent,
    ListFormateurComponent,
    ListSeanceComponent,
    ListEvaluationComponent,
    ListFormationComponent,
    ListGroupeComponent,
    UtilisateurComponent,
    CreateFormateurComponent,
    CreateFormationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
