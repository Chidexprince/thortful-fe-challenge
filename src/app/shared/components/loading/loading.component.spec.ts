import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { By } from '@angular/platform-browser';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoadingComponent]
    });
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default message and spinner', () => {
    const message = fixture.debugElement.nativeElement;
    const spinner = fixture.debugElement.query(By.css('.spinner-border'));

    expect(message.querySelector('p').textContent).toContain('Loading...');
    expect(spinner).toBeTruthy();
  });

  it('should display the input message when available', () => {
    component.message = 'Loading data';
    fixture.detectChanges();
    const message = fixture.debugElement.nativeElement;
    expect(message.querySelector('p').textContent).toContain('Loading data');
  });

});
