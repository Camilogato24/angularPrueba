import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosDivComponent } from './logos-div.component';

describe('LogosDivComponent', () => {
  let component: LogosDivComponent;
  let fixture: ComponentFixture<LogosDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogosDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
