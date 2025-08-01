import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAuthComponent } from './prueba-auth.component';

describe('PruebaAuthComponent', () => {
  let component: PruebaAuthComponent;
  let fixture: ComponentFixture<PruebaAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
