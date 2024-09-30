import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { By } from '@angular/platform-browser';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorComponent]
    });
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default message', () => {
    const message = fixture.debugElement.nativeElement;
    expect(message.querySelector('.error-message').textContent).toContain('An error occurred.');
  });

  it('should display the input message when available', () => {
    component.message = 'Something went wrong!';
    fixture.detectChanges();
    const message = fixture.debugElement.nativeElement;
    expect(message.querySelector('.error-message').textContent).toContain('Something went wrong!');
  });

  it('should emit retry event on button click', () => {
    spyOn(component.retry, 'emit');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.retry.emit).toHaveBeenCalled();
  });

});
