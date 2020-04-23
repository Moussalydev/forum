import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SujetService } from '../services/sujet.service';
import Swal from 'sweetalert2';
import { Sujet } from '../models/sujet.model';

@Component({
  selector: 'app-ajout-sujet',
  templateUrl: './ajout-sujet.component.html',
  styleUrls: ['./ajout-sujet.component.scss']
})
export class AjoutSujetComponent implements OnInit {
  sujetForm:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private sujetService:SujetService
  ) { }

  ngOnInit(): void {
      this.initForm();
  }
  initForm() {
      this.sujetForm = this.formBuilder.group({
        intitule: ['', Validators.required],
      
      });
  
  }
  public succes(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Enrégistré avec succès',
      showConfirmButton: false,
      timer: 1500
    })


  }

  public error(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })

  }
  sendToBack(sujet){
    this.sujetService.AjouterSujet(sujet)
    .subscribe(data =>
       this.succes(), 
       error =>
        this.error());

  }

  onSubmitForm() {

    const formValue = this.sujetForm.value;
    const sujet = new Sujet(
      formValue['intitule']
    
    );
    this.sendToBack(sujet)
       
      
      
  }


}
