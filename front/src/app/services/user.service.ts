import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000"

  login(username: string, password: string){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/user/login`, data)

  }

  register(username: string, password: string, email: string, type: string, phone: string, name: string, surname: string, image: File, license: string, specialization: string, department: string){
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
      department: department
    }

    return this.http.post(`${this.uri}/user/register`, data)
  }
  private showElementSubject = new BehaviorSubject<string>("none");
  showElement$ = this.showElementSubject.asObservable();

  setShowElement(value: string) {
    this.showElementSubject.next(value);
  }
}
