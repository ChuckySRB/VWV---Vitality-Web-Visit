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

  ngOnInit(): void {
    this.reader.onload = () => {
      this.imageUrl = this.reader.result as string;
    };
  }

  reader: FileReader = new FileReader()
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
  imageUrl: string = ""
  message: string = ""

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
          this.router.navigate(["login"])
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
