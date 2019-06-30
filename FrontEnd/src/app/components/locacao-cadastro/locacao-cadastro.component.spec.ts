import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoCadastroComponent } from './locacao-cadastro.component';

describe('LocacaoCadastroComponent', () => {
  let component: LocacaoCadastroComponent;
  let fixture: ComponentFixture<LocacaoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocacaoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
