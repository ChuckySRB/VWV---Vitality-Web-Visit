import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckUp } from '../models/checkup';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/report"

  add(checkup: CheckUp, reason_for_coming: string, diagnose: string, therapy: string, next_checkup: Date){
    const data = {
      checkup,
      reason_for_coming,
      diagnose,
      therapy,
      next_checkup,
    }

    return this.http.post(`${this.uri}/add`, data)

  }
  all(username: string){
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/all`, data)

  }
}
