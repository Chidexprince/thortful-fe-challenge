import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, UserDetailComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  users: User[] = [];
  gender: string = '';
  loading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.loading = true;
    this.userService.getUsers(this.gender).subscribe(data => {
    this.loading = false;
      this.users = data;
    }, error => {
      this.loading = false;
      console.log(error);
    })
  }

}
