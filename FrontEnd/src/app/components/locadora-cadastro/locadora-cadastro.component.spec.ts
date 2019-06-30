import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoraCadastroComponent } from './locadora-cadastro.component';

describe('LocadoraCadastroComponent', () => {
  let component: LocadoraCadastroComponent;
  let fixture: ComponentFixture<LocadoraCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadoraCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadoraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
