import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { USERS } from 'src/mocks/data/users';
import { By } from '@angular/platform-browser';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserDetailComponent]
    });
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    component.user = USERS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user details', () => {
    const userNameElement = fixture.debugElement.query(By.css('.user-name')).nativeElement;
    const userGenderElement = fixture.debugElement.query(By.css('.gender')).nativeElement;
    const userEmailElement = fixture.debugElement.query(By.css('.email')).nativeElement;
    const userPhoneElement = fixture.debugElement.query(By.css('.phone')).nativeElement;
    const userAddressElement = fixture.debugElement.query(By.css('.location')).nativeElement;
    const userAgeElement = fixture.debugElement.query(By.css('.age')).nativeElement;
    const userPictureElement = fixture.debugElement.query(By.css('.user-picture img')).nativeElement;

    expect(userNameElement.textContent).toContain(USERS[0].name.first + ' ' + USERS[0].name.last);
    expect(userGenderElement.textContent).toContain(USERS[0].gender)
    expect(userEmailElement.textContent).toContain(USERS[0].email);
    expect(userPhoneElement.textContent).toContain(USERS[0].phone);
    expect(userAddressElement.textContent).toContain(USERS[0].location.street.number + ' ' +
      USERS[0].location.street.name);
    expect(userAgeElement.textContent).toContain(USERS[0].dob.age);
    expect(userPictureElement.src).toContain(USERS[0].picture.large);
  });

});
