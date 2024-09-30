import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { USERS } from 'src/mocks/data/users';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserListComponent, HttpClientTestingModule],
      providers: [UserService]
    });
    fixture = TestBed.createComponent(UserListComponent);
    userService = TestBed.inject(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial state', () => {
    expect(component.users).toEqual([]);
    expect(component.gender).toBe('');
    expect(component.error).toBe('');
  });

  it('should call getUsers on initialization', () => {
    spyOn(component, 'getUsers');
    component.ngOnInit();
    expect(component.getUsers).toHaveBeenCalled();
  });

  it('should load users successfully', () => {
    spyOn(userService, 'getUsers').and.returnValue(of(USERS));
    component.getUsers();
    expect(component.isLoading).toBeFalse();
    expect(component.users).toEqual(USERS);
    expect(component.error).toBe('');
  });

  it('should handle error while loading users', () => {
    spyOn(userService, 'getUsers').and.returnValue(throwError('error'));
    component.getUsers();
    expect(component.isLoading).toBeFalse();
    expect(component.users).toEqual([]);
    expect(component.error).toBe('Failed to load users, Try again later.');
  });
});
