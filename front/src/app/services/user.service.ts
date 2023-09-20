import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CheckUpType } from '../models/checkuptype';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/user"

  login(username: string, password: string){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/login`, data)

  }

  register(username: string, password: string, email: string, type: string, phone: string, name: string, surname: string, image: string, license: string, specialization: string, department: string){
    const data = {
      username: username,
      password: password,
      email: email,
      type: type,
      phone: phone,
      name: name,
      surname: surname,
      license: license,
      specialization: specialization,
      department: department,
      image: image
    }

    return this.http.post(`${this.uri}/register`, data)
  }

  changeData(username: string, type: string, phone: string, name: string, surname: string, image: string, license: string, specialization: string){
    const data = {
      username: username,
      role: type,
      phone: phone,
      name: name,
      surname: surname,
      license: license,
      specialization: specialization,
      image: image
    }

    return this.http.post(`${this.uri}/change/data`, data)
  }

  getDoctors(){
    return this.http.get(`${this.uri}/doctors`)
  }

  getDoctor(username: string){
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/doctor`, data)
  }

  confirmUser(username: string){
    const data = {
      username: username,
    }
    return this.http.post(`${this.uri}/confirm`, data)
  }
  updateCheckUps(username: string, checkups: CheckUpType[]){
    const data = {
      username: username,
      checkups: checkups
    }
    return this.http.post(`${this.uri}/doctor/update/checkups`, data)
  }


  private showElementSubject = new BehaviorSubject<string>("none");
  showElement$ = this.showElementSubject.asObservable();

  setShowElement(value: string) {
    this.showElementSubject.next(value);
  }
}
