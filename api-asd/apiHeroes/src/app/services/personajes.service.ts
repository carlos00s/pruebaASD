import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from '../models/personaje'
 
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  API_URI = 'http://localhost:3000/api';

  constructor( private http: HttpClient) { }

  getPersonajes(){
    return this.http.get(`${this.API_URI}/heroes`);
  }
  getPersonaje(id: string){
    return this.http.get(`${this.API_URI}/heroes/${id}`);
  }
  postPersonaje(personaje: Personajes){
    return this.http.post(`${this.API_URI}/heroes`, personaje);
  }
  deletePersonaje(id: string){
    return this.http.delete(`${this.API_URI}/heroes/${id}`);
  }
  putPersonaje(id: any, update: Personajes ){
    return this.http.put(`${this.API_URI}/heroes/${id}`, update);
  }
}
