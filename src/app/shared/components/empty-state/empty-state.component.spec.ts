import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  let component: EmptyStateComponent;
  let fixture: ComponentFixture<EmptyStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmptyStateComponent]
    });
    fixture = TestBed.createComponent(EmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default title and subtitle', () => {
    const card = fixture.debugElement.nativeElement;

    expect(card.querySelector('.card-title').textContent).toContain('No data found.');
    expect(card.querySelector('.card-text').textContent).toContain('There are currently no data available');
  });

  it('should display the input title and subtitle when available', () => {
    component.title = 'No users found';
    component.subTitle = 'Please add some users to see the data';
    fixture.detectChanges();
    const card = fixture.debugElement.nativeElement;
    expect(card.querySelector('.card-title').textContent).toContain('No users found');
    expect(card.querySelector('.card-text').textContent).toContain('Please add some users to see the data');
  });
});
