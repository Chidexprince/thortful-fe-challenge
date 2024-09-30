import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain right content', () => {
    const homeLink: DebugElement = fixture.debugElement.query(By.css('a[routerLink="/"]'));
    const usersLink: DebugElement = fixture.debugElement.query(By.css('a[routerLink="/users"]'));
    const brand: DebugElement = fixture.debugElement.query(By.css('.navbar-brand'));

    expect(homeLink).toBeTruthy();
    expect(homeLink.nativeElement.textContent).toContain('Home');

    expect(usersLink).toBeTruthy();
    expect(usersLink.nativeElement.textContent).toContain('Users');

    expect(brand).toBeTruthy();
    expect(brand.nativeElement.textContent).toContain('FE-Challenge');
  });
});
