import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea13Component } from './tarea13.component';

describe('Tarea13Component', () => {
  let component: Tarea13Component;
  let fixture: ComponentFixture<Tarea13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tarea13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
