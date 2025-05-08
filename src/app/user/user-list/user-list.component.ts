import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private _userService: UserService
  ){}

  users: any[] = []; //Because no class/interface we using any

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers(): void {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

}
