import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor (private router: Router, private userService: UserService){
  }
  ngOnInit(): void {
    this.loged_user = JSON.parse(localStorage.getItem('user'))
    if (this.loged_user && this.loged_user.type != "none") {
      this.user = this.loged_user.type
    }
    else{ 
      this.userService.showElement$.subscribe(value => {
        this.user = value;
      })
      this.user = "none"
    }
    
  }
 

  active_header: string
  user: string = "none"
  loged_user: User

  Login(){
    this.router.navigate(["login"])
  }

  Logout(){
    localStorage.clear()
    this.user = "none"
    this.router.navigate(['login'])
  }

}
