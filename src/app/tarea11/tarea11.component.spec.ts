import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea11Component } from './tarea11.component';

describe('Tarea11Component', () => {
  let component: Tarea11Component;
  let fixture: ComponentFixture<Tarea11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tarea11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
