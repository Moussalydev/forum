import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../services/serveur'
import  {tap} from 'rxjs/operators'
import {Observable,Subject} from 'rxjs'
import { Question } from '../models/question.entity';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public baseUrl = AppSettings.API_ENDPOINT+AppSettings.base_api;

  private refresh_data = new Subject<void>();

  get refresh_dat(){
    return this.refresh_data;

 }


  

  constructor(
    private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    
    })
};



 AfficherToutesLesQuestion(): Observable<any> {
    return this.http.get(`${this.baseUrl}list-questions`);
  }
  AjouterQuestion(question: Object): Observable<Object> {

    return this.http.
            post(`${this.baseUrl}add-question`,question)
                .pipe(
                  tap(()=>{
                      this.refresh_data.next();
                  })

            );
    }

  
 

  

  
  


}