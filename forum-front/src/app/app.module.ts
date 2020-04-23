import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SignupComponent } from './signup/signup.component';
import { ListsujetsComponent } from './listsujets/listsujets.component';
import { AjoutSujetComponent } from './ajout-sujet/ajout-sujet.component';
import { AjoutQuestionComponent } from './ajout-question/ajout-question.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    SignupComponent,
    ListsujetsComponent,
    AjoutSujetComponent,
    AjoutQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    HttpClientModule,
    
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
