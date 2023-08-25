import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor (private router: Router, private userService: UserService){
  }

  username: string = ""
  password: string = ""
  cpassword: string = ""
  type: string = "patient"
  name: string = ""
  surname: string = ""
  email: string = ""
  phone: string = ""
  license: string = ""
  specialization: string = ""
  department: string = ""
  image: File = null
  

  Register(){
    if (this.password != this.cpassword){

    }
    else{
      this.userService.register(this.username, this.password, this.email, this.type, this.phone, this.name, this.surname, this.image, this.license, this.specialization, this.department).subscribe((message: string)=>{
        if(message!=null){
          this.router.navigate(["login"])
        }
        else{
          alert("Error!")
        }
      })
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    // Implement logic for handling the selected file
  }
}
