import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckuptypeService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/checkuptype"

  add(specialization: string, name: string, duratation: number, cost: number){
    const data = {
      specialization: specialization,
      name: name,
      duration: duratation,
      cost: cost,
    }

    return this.http.post(`${this.uri}/add`, data)

  }

  confirm(_id: string){
    const data = {
      _id: _id,
    }

    return this.http.post(`${this.uri}/confirm`, data)

  }
  
  getMy(specialization: string){
    const data = {
      specialization: specialization,
    }

    return this.http.post(`${this.uri}/getMy`, data)

  }
}
