import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserManagementComponent } from './user-management.component';
import { UserService } from './services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserManagementComponent, HttpClientTestingModule],
      providers: [UserService]
    });
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
