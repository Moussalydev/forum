import { Component, OnInit, ɵɵcontainerRefreshEnd } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SujetService } from '../services/sujet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Question } from '../models/question.model';
import { QuestionService } from '../services/question.service';
import $ from "jquery";





@Component({
  selector: 'app-ajout-question',
  templateUrl: './ajout-question.component.html',
  styleUrls: ['./ajout-question.component.scss']
})
export class AjoutQuestionComponent implements OnInit {
  id:string;
  sujet:any;
  myForm: FormGroup;
  all_questions:any;

  constructor(
    private formBuilder: FormBuilder,
      private route:ActivatedRoute,
      private sujetService:SujetService,
      private questionService:QuestionService
      
    ) { }
    

  public questions = {
    "sujet":{},
    "auteur":"",
    "libelle":"",
    "date":new Date()

  }
  initForm() {
    this.myForm = this.formBuilder.group({
        libelle: ['', Validators.required],
      
    });
  

  }

  ngOnInit(): void {

    
    this.id = this.route.snapshot.params['id'];
    this.initForm()

   this.questionService.refresh_dat.
      subscribe(()=>{
        this.getAllQuestions();

      })

    this.ChargerQuestions()
    
    this.sujetService.AfficherSujetParId(this.id)
        .subscribe(data => {
              this.sujet =data;
              this.questions.sujet= this.sujet;
              this.questions.auteur="Moussa";
          
        
        }, error => 
        console.log(error)
    );


  }
  private getAllQuestions(){

    this.questionService.AfficherToutesLesQuestion().subscribe(
      data => {
        this.all_questions = data;
      },
        (error) => {
            console.log(error)
          
        }
    );




  }

  sendToBack(question){
    this.questionService.AjouterQuestion(question)
    .subscribe(data =>
       console.log("succcesss"), 
       error =>
        console.log("erreur"));


  } 

  ChargerQuestions() {
  
    this.questionService.AfficherToutesLesQuestion().subscribe(
      data => {
        this.all_questions = data;
      },
        (error) => {
            console.log(error)
          
        }
    );

}
  onSubmitForm() {

    const formValue = this.myForm.value;
    const question = new Question(
          formValue['libelle'],
         
      
    );
    this.questions.libelle = question.libelle;
   
    
      this.sendToBack(this.questions) 
      
      
  }
  
 
 
 

}
