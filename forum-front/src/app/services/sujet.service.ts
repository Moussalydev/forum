import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from '../services/serveur'


@Injectable({
  providedIn: 'root'
})
export class SujetService {

  public baseUrl = AppSettings.API_ENDPOINT+AppSettings.base_api;

  

  constructor(
    private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    
    })
};



 AfficherTouSLesSujets(): Observable<any> {
    return this.http.get(`${this.baseUrl}list-sujets`);
  }

  AjouterSujet(eleve: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl}ajout-sujet`,eleve);
  }
  AfficherSujetParId(id): Observable<any> {
    return this.http.get(`${this.baseUrl}sujet/${id}`);
  }

  

  
  


}