import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea12Component } from './tarea12.component';

describe('Tarea12Component', () => {
  let component: Tarea12Component;
  let fixture: ComponentFixture<Tarea12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tarea12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
