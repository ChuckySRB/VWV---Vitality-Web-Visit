import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { Specialization } from 'src/app/models/specialization';
import { User } from 'src/app/models/user';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-other',
  templateUrl: './admin-other.component.html',
  styleUrls: ['./admin-other.component.css']
})
export class AdminOtherComponent {
  constructor (private router: Router, private userService: UserService, private dsService: DepartmentService){
  }
  ngOnInit(): void {
  
    this.loged_user = JSON.parse(localStorage.getItem('user'))
      if (!this.loged_user || this.loged_user.type != "manager") {
        this.router.navigate(['/'])
      }
      else{
        this.dsService.all().subscribe(
          (departments: Department[])=>{
            this.departments = departments
          })
          this.dsService.allSpecialization().subscribe(
            (specs: Specialization[])=>{
              this.specializations = specs
            })
      }
    
  }

  loged_user: User = null
  department: string = ""
  specialization: string = ""
  message: string = ""
  specializations: Specialization[] = []
  departments: Department[] = []

  addDepartment(){
    if (this.department != ""){
      this.dsService.add(this.department).subscribe((message: {message:string})=>{
        if (message){
          this.message = message.message
          this.departments.push({name: this.department})
        }
        
      })
    }
    else{
      this.message = "Fail"
    }
  }
  addSpecialization(){
    if (this.specialization != ""){
      this.dsService.addSpecialization(this.specialization).subscribe((message: {message:string})=>{
        if (message){
          this.message = message.message
          this.specializations.push({name: this.specialization})
        }
        
      })
    }
    else{
      this.message = "Fail"
    }
  }
}
