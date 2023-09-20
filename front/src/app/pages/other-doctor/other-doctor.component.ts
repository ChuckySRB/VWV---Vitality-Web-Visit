import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CheckuptypeService } from 'src/app/services/checkuptype.service';

@Component({
  selector: 'app-other-doctor',
  templateUrl: './other-doctor.component.html',
  styleUrls: ['./other-doctor.component.css']
})
export class OtherDoctorComponent {

  constructor (private router: Router, private checkuptypeService: CheckuptypeService){}

  ngOnInit(): void {
    this.loged_user = JSON.parse(localStorage.getItem('user'))
    if (!this.loged_user || this.loged_user.type != "doctor") {
      this.router.navigate(['/'])
    } 
    else{ 
      
    }
  }
  loged_user: User = null
  name: string = ""
  duration: number = 45
  cost: number = 1000
  message: string

  createType(){
    this.checkuptypeService.add(this.loged_user.doctor_info.specialization, this.name,this.duration, this.cost).subscribe((message:{message:string})=>{
      if (message && message.message){
        this.message = message.message
      }
    })
  }

}
