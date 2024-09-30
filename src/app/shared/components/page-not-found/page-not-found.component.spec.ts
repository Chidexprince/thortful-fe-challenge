import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageNotFoundComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct content of page', () => {
    const errorCode = fixture.nativeElement.querySelector('.error').textContent;
    const errorMessage = fixture.nativeElement.querySelector('.error-text').textContent;
    const button = fixture.nativeElement.querySelector('.back-home');

    expect(errorCode).toBe('404');
    expect(errorMessage).toContain("The page you are looking for can’t be found!");
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('Back to home');
  });

  it('should navigate to dashboard on button click', () => {
    spyOn(router, 'navigate');
    const button = fixture.nativeElement.querySelector('button.back-home');
    button.click();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
