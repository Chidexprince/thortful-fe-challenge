import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from "../../../../shared/components/error/error.component";
import { LoadingComponent } from "../../../../shared/components/loading/loading.component";
import { EmptyStateComponent } from "../../../../shared/components/empty-state/empty-state.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, UserDetailComponent, ErrorComponent, LoadingComponent, EmptyStateComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  users: User[] = [];
  gender: string = '';
  isLoading: boolean = false;
  error: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.isLoading = true;
    this.error = '';
    this.userService.getUsers(this.gender).subscribe(data => {
    this.isLoading = false;
      this.users = data;
    }, error => {
      this.isLoading = false;
      this.error = "Failed to load users, Try again later.";
    })
  }

}
