import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { SignupComponent } from './signup/signup.component';
import { ListsujetsComponent } from './listsujets/listsujets.component';
import { AjoutSujetComponent } from './ajout-sujet/ajout-sujet.component';
import { AjoutQuestionComponent } from './ajout-question/ajout-question.component';






const routes: Routes = [
  {path:'signin',component: ConnexionComponent},
  {path:'signup',component:SignupComponent},
  {path:'list-sujet',component:ListsujetsComponent},
  {path:'ajout-sujet',component:AjoutSujetComponent},
  {path:'question/:id',component:AjoutQuestionComponent},
  {path:'question',component:AjoutQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
