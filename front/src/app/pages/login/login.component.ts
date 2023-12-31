import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router: Router, private userService: UserService){
  }

  username: string = ""
  password: string = ""
  message: string = ""

  Login(){
    this.userService.login(this.username, this.password).subscribe((user: User)=>{
      if(user!=null && !user.message && user.type!='manager'){
        localStorage.setItem('user', JSON.stringify(user))
        this.userService.setShowElement(user.type)
        //location.reload();
        this.router.navigate(["/profil"])
      }
      else{
        this.message = user.message
      }
    })
  }
}
