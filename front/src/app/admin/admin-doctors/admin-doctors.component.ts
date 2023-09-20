import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { Specialization } from 'src/app/models/specialization';
import { User } from 'src/app/models/user';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.component.html',
  styleUrls: ['./admin-doctors.component.css']
})
export class AdminDoctorsComponent {
  constructor (private router: Router, private userService: UserService, private dsService: DepartmentService){
  }

  ngOnInit(): void {
    this.reader.onload = () => {
      this.imageUrl = this.reader.result as string;
    };

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
  reader: FileReader = new FileReader()
  username: string = ""
  password: string = ""
  cpassword: string = ""
  type: string = "doctor"
  name: string = ""
  surname: string = ""
  email: string = ""
  phone: string = ""
  license: string = ""
  specialization: string = ""
  department: string = ""
  image: File = null
  imageUrl: string = ""
  message: string = ""
  departments: Department[] = []
  specializations: Specialization[] = []

  Register(){
    if (this.password != this.cpassword){
      this.message = "Lozinke se ne poklapaju!"
    }
    else if (!this.username || !this.email){
      this.message = "EMail i Username su obavezni!"
    }
    else{
      this.userService.register(this.username, this.password, this.email, this.type, this.phone, this.name, this.surname, this.imageUrl, this.license, this.specialization, this.department).subscribe((message: {message: string})=>{
        if(message && message.message == 'ok'){
          this.router.navigate(["/admin/lekari"])
          this.message = "Uspešna registracija!"
        }
        else{
          this.message = message.message
        }
      })
    }
  }

  onFileChange(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
      this.reader.readAsDataURL(this.image);
    }
  }
}
