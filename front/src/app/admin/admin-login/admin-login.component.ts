import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor (private router: Router, private userService: UserService){
  }

  username: string = ""
  password: string = ""
  message: string = ""

  Login(){
    this.userService.login(this.username, this.password).subscribe((user: User
      )=>{
      if(user!=null && !user.message && user.type=='manager'){
        localStorage.setItem('user', JSON.stringify(user))
        this.userService.setShowElement(user.type)
        //location.reload();
        this.router.navigate(["/admin/pacijenti"])
      }
      else{
        this.message = user.message
      }
    })
  }
}
