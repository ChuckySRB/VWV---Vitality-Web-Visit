import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  ngOnInit(): void {
    this.loged_user = JSON.parse(localStorage.getItem('user'))
    if (this.loged_user && this.loged_user.type != "none") {
      this.user = this.loged_user.type
      this.loged = true;
    }
    
  }
  constructor (private router: Router){
  }

  active_header: string
  loged: boolean = false
  user: string = "none"
  loged_user: User

  Login(){
    this.router.navigate(["login"])
  }

  Logout(){
    localStorage.clear()
    this.router.navigate(['login']) 
  }

}
