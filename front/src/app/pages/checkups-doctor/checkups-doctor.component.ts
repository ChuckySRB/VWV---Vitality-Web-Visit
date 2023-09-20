import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUp } from 'src/app/models/checkup';
import { Report } from 'src/app/models/report';
import { User } from 'src/app/models/user';
import { CheckupService } from 'src/app/services/checkup.service';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-checkups-doctor',
  templateUrl: './checkups-doctor.component.html',
  styleUrls: ['./checkups-doctor.component.css']
})
export class CheckupsDoctorComponent {
  constructor (private router: Router, private userService: UserService, private checkUpsService: CheckupService, private reportService: ReportService){}
  
  ngOnInit(): void {
    this.loged_user = JSON.parse(localStorage.getItem('user'))
    if (this.loged_user && this.loged_user.type == "doctor") {
        this.checkUpsService.getMyCheckUps(this.loged_user.username, 'doctor').subscribe((checkups: CheckUp[])=>{
          if (checkups){
            this.all_checkups=checkups
            this.all_checkups.forEach(checkup => {
              checkup.isClicked = false;
            })
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
  message: string = ""
  reason_for_comming: string = ""
  terrapy: string = ""
  diagnose: string = ""
  next_checkup: Date = null
  checkuptype: CheckUp = null

  cancelCheckUp(cid){
    this.checkUpsService.cancelCheckUp(cid).subscribe((message:{message:string})=>{
        if (message && message.message){
          this.message = message.message
        }
    })
  }

  toggleCheckUp(checkup: CheckUp){
    checkup.isClicked = !checkup.isClicked;
    console.log(checkup)
    console.log(this.checkuptype)
    if (this.checkuptype && this.checkuptype._id != checkup._id){
      this.checkuptype.isClicked = false;
      this.checkuptype = checkup
      this.reportService.all(checkup.patient).subscribe((reports: Report[])=>{
        this.all_reports = reports
      })
    }
    else if (this.checkuptype && this.checkuptype._id == checkup._id){
      this.checkuptype = null
      this.all_reports = []
    }
    else{
      this.checkuptype = checkup
      this.reportService.all(checkup.patient).subscribe((reports: Report[])=>{
        this.all_reports = reports
      })
    }
    console.log(this.checkuptype)
    
}
  makeReport(){
      if (!this.checkuptype){
        this.message = "Izaberite pregled za koji hocete da napisete izvestaj!"
      }
      else{
        this.reportService.add(this.checkuptype, this.reason_for_comming, this.diagnose, this.terrapy, this.next_checkup).subscribe(
          (message: {message:string})=>{
            if (message){
              this.message = message.message
            }
          }
        )
      }
  }
}
