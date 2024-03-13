import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea10Component } from './tarea10.component';

describe('Tarea10Component', () => {
  let component: Tarea10Component;
  let fixture: ComponentFixture<Tarea10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tarea10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
