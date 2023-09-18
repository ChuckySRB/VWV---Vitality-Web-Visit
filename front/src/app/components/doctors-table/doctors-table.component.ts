import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgIf } from '@angular/common';
import {MatSort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-doctors-table',
  templateUrl: './doctors-table.component.html',
  styleUrls: ['./doctors-table.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, NgIf, MatSortModule],
})
export class DoctorsTableComponent implements OnInit{
  displayedColumns: string[] = ['image', 'name', 'surname','specialization', 'email', 'phone', 'department']
  dataSource: MatTableDataSource<User>
  loged_user: User;
  user: String;

  @ViewChild(MatSort) sort: MatSort;

  constructor (private router: Router, private userService: UserService){
    
    userService.getDoctors().subscribe((users: User[])=>{
      this.dataSource = new MatTableDataSource(users)
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
      this.dataSource.filterPredicate = this.customFilter;
    })
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
  customFilter(data: User, filter: string): boolean {
    // Filter based on the fields you want to include
    return (
      data.name?.toLowerCase().includes(filter.toLowerCase()) ||
      data.surname?.toLowerCase().includes(filter.toLowerCase()) ||
      data.doctor_info?.specialization?.toLowerCase().includes(filter.toLowerCase()) ||
      data.email?.toLowerCase().includes(filter.toLowerCase()) ||
      data.phone?.toLowerCase().includes(filter.toLowerCase()) ||
      data.doctor_info?.department?.toLowerCase().includes(filter.toLowerCase())
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToDoctor(doctorID: number){
    if (this.user != 'none'){
      this.router.navigate(["doctor/"+doctorID]);
    }
  } 
}
