import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelInglesComponent } from './nivel-ingles.component';

describe('NivelInglesComponent', () => {
  let component: NivelInglesComponent;
  let fixture: ComponentFixture<NivelInglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelInglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
