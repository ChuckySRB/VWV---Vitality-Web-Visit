import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUpType } from 'src/app/models/checkuptype';
import { User } from 'src/app/models/user';
import { CheckupService } from 'src/app/services/checkup.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
  constructor (private router: Router, private userService: UserService, private checkUpsService: CheckupService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.loged_user = JSON.parse(localStorage.getItem('user'))
    if (this.loged_user && this.loged_user.type == "patient") {
      this.userService.getDoctor(this.route.snapshot.paramMap.get('username')).subscribe((user: User)=>{
         if (user && user.message){
            this.message = user.message
         }
         else{
          this.doctor_user = user
          this.doctor_user.doctor_info.checkups.forEach(checkup => {
            checkup.isClicked = false;
          })
        }
      })
      
    } 
    else{ 
      this.userService.showElement$.subscribe(value => {
        this.user = value;
      })
      this.router.navigate(['/'])
    }
  }

  user: String = "none"
  loged_user: User = null
  doctor_user: User = null
  checkuptype: CheckUpType = null
  message: String = ""
  checkupdate: Date = null
  selectedHours: number=12
  selectedMinutes: number=0

  toggleCheckUp(checkup: CheckUpType){
      checkup.isClicked = !checkup.isClicked;
      if (this.checkuptype && this.checkuptype._id != checkup._id){
        this.checkuptype.isClicked = false;
        this.checkuptype = checkup
      }
      else if (this.checkuptype && this.checkuptype._id == checkup._id){
        this.checkuptype = null
      }
      else{
        this.checkuptype = checkup
      }
      
  }
  scheduleCheckUp(){
      if (!this.checkupdate){
        this.message = "Izaberite Datum!"
      }
      else{
        this.checkupdate.setHours(this.selectedHours)
        this.checkupdate.setMinutes(this.selectedMinutes)
        if (!this.checkuptype){
          this.message = "Izaberite Pregled!"
        }
        else if(this.checkupdate.getTime() <= Date.now()){
          this.message = "Izaberani datum mora biti nakon današnjeg dana!"
        }
        else{
          this.checkUpsService.create(this.loged_user.username, 
            this.doctor_user.username, this.checkuptype, this.checkupdate).subscribe((message:{message:string})=>{
              if (message){
                this.message = message.message
              }
            })
  
        }
      }
      
    
  }
}
