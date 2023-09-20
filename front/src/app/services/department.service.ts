import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/department"

  add(name: string){
    const data = {
      name: name
    }

    return this.http.post(`${this.uri}/add`, data)
  }

  all(){
    return this.http.get(`${this.uri}/all`)
  }

  delete(name: string){
    const data = {
      name: name
    }

    return this.http.post(`${this.uri}/delete`, data)
  }
}
