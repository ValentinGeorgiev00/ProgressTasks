import { take } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
 
})
export class AddEditComponent implements OnInit {
  hide = true;
  auth!: string;
  form!: FormGroup;
  user!: User;

  @Input() type!: string;
   @Input() dataItem!: User;
   constructor(private usersService:UsersService) {}

  private buildForm(): void {
    this.form = new FormGroup({

      name: new FormControl( this.dataItem?.name ?? '', Validators.required),
      username: new FormControl(this.dataItem?.username ?? '', Validators.required),
    email: new FormControl(this.dataItem?.email ?? '', Validators.required),
phone: new FormControl(this.dataItem?.phone ?? '', Validators.required),

website: new FormControl(this.dataItem?.website ?? '', Validators.required),
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }
     public opened = false;
 
  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }
  onSubmit(): void {
    if (this.type === 'add') {
       this.usersService.addUser(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: () => {
              console.log('add');
        },
        error: (res: HttpErrorResponse) => {
        console.log(res);
        
        },
      });
     this.usersService.getUsers$().subscribe({
      next: (res) => {
       console.log(res);
      }
    })
    } else {
            this.usersService.updateUser(this.dataItem.id,this.form.value)
      .pipe(take(1))
      .subscribe({
        next: () => {
              console.log('update');
        },
        error: (res: HttpErrorResponse) => {
        console.log(res);
        
        },
      });
     this.usersService.getUsers$().subscribe({
      next: (res) => {
       console.log(res);
      }
    })
    }
   
  }
}
