import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckUpType } from '../models/checkuptype';

@Injectable({
  providedIn: 'root'
})
export class CheckupService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/checkup"

  create(patient: string, doctor: string, type:CheckUpType, datetime: Date){
    const data = {
      patient: patient,
      doctor: doctor,
      type: type,
      datetime: datetime
    }

    return this.http.post(`${this.uri}/create`, data)

  }

  getAll(){
    return this.http.get(`${this.uri}/all`)
  }

  getMyCheckUps(username: string, type: string){
    const data = {
      username: username,
      type: type
    }

    return this.http.post(`${this.uri}/mycheckups`, data)
  }

  getMyCheckUpsAndReports(username: string, type: string){
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/reports/all`, data)
  }

  cancelCheckUp(_id: string){
    const data = {
      _id: _id
    }

    return this.http.post(`${this.uri}/cancel`, data)
  }

}
