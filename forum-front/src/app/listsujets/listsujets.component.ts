import { Component, OnInit } from '@angular/core';
import { SujetService } from '../services/sujet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listsujets',
  templateUrl: './listsujets.component.html',
  styleUrls: ['./listsujets.component.scss']
})
export class ListsujetsComponent implements OnInit {
  sujets:any;

  constructor(
    private router:Router,
    private sujetService:SujetService) { }

  ngOnInit(): void {

    this.ChargerSujets()
  }
  ChargerSujets() {
  
    this.sujetService.AfficherTouSLesSujets().subscribe(
      data => {
        this.sujets = data;
      },
        (error) => {
            console.log(error)
          
        }
    );

}
poser_question(id){
  this.router.navigate(['question', id]);
  
}
Ajoutsujet(){
  this.router.navigate(['ajout-sujet']);
  
}

}
