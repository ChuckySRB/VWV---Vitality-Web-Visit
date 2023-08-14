import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  register(username: string, password: string){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/user/register`, data)
  }

}
