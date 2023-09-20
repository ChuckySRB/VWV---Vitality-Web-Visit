import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUp } from 'src/app/models/checkup';
import { Report } from 'src/app/models/report';
import { User } from 'src/app/models/user';
import { CheckupService } from 'src/app/services/checkup.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkups-patient',
  templateUrl: './checkups-patient.component.html',
  styleUrls: ['./checkups-patient.component.css']
})
export class CheckupsPatientComponent {
  constructor (private router: Router, private userService: UserService, private checkUpsService: CheckupService){}
  
  ngOnInit(): void {
    this.loged_user = JSON.parse(localStorage.getItem('user'))
    if (this.loged_user && this.loged_user.type == "patient") {
        this.checkUpsService.getMyCheckUpsAndReports(this.loged_user.username).subscribe((results: {checkups: CheckUp[], reports: Report[]})=>{
          if (results){
            this.all_checkups=results.checkups
            this.all_reports=results.reports
          } 
          else{
            this.message = "Neuspešno uzeti pregledi!"
          }
        })
      }
    else{ 
      this.router.navigate(['/'])
    }

    

  }


  loged_user: User = null
  all_checkups: CheckUp[] = []
  all_reports: Report[] = []
  message: String = ""


  cancelCheckUp(cid){
    this.checkUpsService.cancelCheckUp(cid).subscribe((message:{message:string})=>{
        if (message && message.message){
          this.message = message.message
        }
    })
  }
}
