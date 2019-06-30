import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraEdicaoComponent } from './locadora-edicao.component';

describe('LocadoraEdicaoComponent', () => {
  let component: LocadoraEdicaoComponent;
  let fixture: ComponentFixture<LocadoraEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadoraEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadoraEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
