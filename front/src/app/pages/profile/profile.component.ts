import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  constructor (private router: Router, private userService: UserService){}
  
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

  user: String = "none"
  loged_user: User = null



}
