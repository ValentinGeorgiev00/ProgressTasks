import { Component, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective } from "@progress/kendo-angular-grid";

import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  users!: User[]
  public checked: boolean = false;
   public gridView: any[];
  gridData: any;
  constructor(private usersService:UsersService) {
    this.gridView = this.gridData
  }
 
  public ngOnInit(): void {
    this.getUsers()
  }

  public onChange(value: boolean) {
    console.log(value);
    
    this.checked = value;
  }
  
  private getUsers() {
    this.usersService.getUsers$().subscribe({
      next: (res) => {
        this.users = res;
        this.gridData = this.users;
    this.gridView = this.gridData;
      }
    })
  }
}