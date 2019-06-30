import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadorasComponent } from './locadoras.component';

describe('LocadorasComponent', () => {
  let component: LocadorasComponent;
  let fixture: ComponentFixture<LocadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
