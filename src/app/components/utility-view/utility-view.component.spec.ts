import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  UtilityComponent } from './utility-view.component';

describe('UtilityViewComponent', () => {
  let component: UtilityComponent;
  let fixture: ComponentFixture<UtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
