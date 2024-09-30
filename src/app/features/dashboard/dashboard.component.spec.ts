import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome message and lead text', () => {
    const welcomeMessage = fixture.nativeElement.querySelector('h1').textContent;
    const leadText = fixture.nativeElement.querySelector('p.lead').textContent;

    expect(welcomeMessage).toContain('Welcome');
    expect(leadText).toContain('Simple Home Page.');
  });

  it('should have three user cards with correct links', () => {
    const userCards = fixture.debugElement.queryAll(By.css('a[routerLink="/users"]'));
    expect(userCards.length).toBe(3);
    userCards.forEach(card => {
      expect(card.nativeElement.textContent).toContain('Users');
    });
  });
});
