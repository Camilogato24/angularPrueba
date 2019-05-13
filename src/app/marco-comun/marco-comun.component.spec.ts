import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoComunComponent } from './marco-comun.component';

describe('MarcoComunComponent', () => {
  let component: MarcoComunComponent;
  let fixture: ComponentFixture<MarcoComunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoComunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
