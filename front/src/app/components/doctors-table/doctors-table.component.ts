import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-doctors-table',
  templateUrl: './doctors-table.component.html',
  styleUrls: ['./doctors-table.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, NgIf],
})
export class DoctorsTableComponent {
  displayedColumns: string[] = ['image', 'email', 'phone', 'department']
  dataSource: MatTableDataSource<User>

  constructor (private router: Router, private userService: UserService){
    
    userService.getDoctors().subscribe((users: User[])=>{
      this.dataSource = new MatTableDataSource(users)
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
