import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckUpType } from 'src/app/models/checkuptype';
import { User } from 'src/app/models/user';
import { CheckuptypeService } from 'src/app/services/checkuptype.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  constructor (private router: Router, private userService: UserService, private checkUpTypesService: CheckuptypeService){}
  
  ngOnInit(): void {
    this.loged_user = JSON.parse(localStorage.getItem('user'))
    if (this.loged_user && this.loged_user.type != "none") {
      this.user = this.loged_user.type
      if (this.loged_user.type == 'doctor'){
        this.checkUpTypesService.getMy(this.loged_user.doctor_info.specialization).subscribe((checkups: CheckUpType[])=>{
          if (checkups){
            this.all_checkups=checkups
            this.all_checkups.forEach(checkup => {
              checkup.isClicked = false;    
            });
          } 
          else{
            this.message = "Neuspešno uzeti pregledi!"
          }
        })
      }
    }
    else{ 
      this.userService.showElement$.subscribe(value => {
        this.user = value;
      })
      this.user = "none"
      this.router.navigate(['/login'])
    }

    

  }

  user: String = "none"
  loged_user: User = null
  all_checkups: CheckUpType[] = []
  new_checkups: CheckUpType[] = []
  message: String = ""

  toggleCheckUp(checkup: CheckUpType){
    let cid = checkup._id
    console.log(cid)
    let existing_checkup = this.new_checkups.findIndex(item => item._id === checkup._id)
    if (existing_checkup != -1){
      console.log(existing_checkup)
      this.new_checkups.splice(existing_checkup, 1)
    }
    else{
      console.log(existing_checkup)
      this.new_checkups.push(checkup)
    }
    checkup.isClicked = !checkup.isClicked
    console.log(this.new_checkups)
  }

  updateCheckUps(){
    this.userService.updateCheckUps(this.loged_user.username, this.new_checkups).subscribe((message: {message: string})=>{
      if(message && message.message){
        this.message=message.message
        this.loged_user.doctor_info.checkups = this.new_checkups.slice()
        localStorage.setItem('user', JSON.stringify(this.loged_user))
      }
    })
  }



}
