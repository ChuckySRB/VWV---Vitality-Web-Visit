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
import { CheckUpType } from 'src/app/models/checkuptype';
import { CheckuptypeService } from 'src/app/services/checkuptype.service';

@Component({
  selector: 'app-checkups-table',
  templateUrl: './checkups-table.component.html',
  styleUrls: ['./checkups-table.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, NgIf, MatSortModule],

})
export class CheckupsTableComponent {

  displayedColumns: string[] = ['specialization', 'name', 'duration', 'cost', 'status', 'controls']
  dataSource: MatTableDataSource<CheckUpType>
  loged_user: User;
  message: string = "";
  @ViewChild(MatSort) sort: MatSort;

  constructor (private router: Router, private userService: UserService, private cutService: CheckuptypeService){
    
    cutService.all().subscribe((checkups: CheckUpType[])=>{
      this.dataSource = new MatTableDataSource(checkups)
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    })
  }

  ngOnInit(): void {
    this.loged_user = JSON.parse(localStorage.getItem('user'))
    if (this.loged_user && this.loged_user.type == "manager") {
      
    }
    else{ 
      this.router.navigate(['/'])
    }
    
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  updateCheckUpType(checkup, status){
    this.cutService.confirm(checkup._id, status).subscribe((message: {message: string})=>{
      if (message){
        this.message=message.message
        checkup.status=status
      }

    })
  }
}
