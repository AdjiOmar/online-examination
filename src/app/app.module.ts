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
import { CreateFormateurComponent } from './components/create-formateur/create-formateur.component';
import { ListApprenantComponent } from './components/list-apprenant/list-apprenant.component';
import { ListFormateurComponent } from './components/list-formateur/list-formateur.component';
import { ListModuleComponent } from './components/list-module/list-module.component';
import { ListSeanceComponent } from './components/list-seance/list-seance.component';
import { ListEvaluationComponent } from './components/list-evaluation/list-evaluation.component';
import { ListFormationComponent } from './components/list-formation/list-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ApprenantComponent,
    RegisterComponent,
    CreateApprenantComponent,
    CreateFormateurComponent,
    ListApprenantComponent,
    ListFormateurComponent,
    ListModuleComponent,
    ListSeanceComponent,
    ListEvaluationComponent,
    ListFormationComponent
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
