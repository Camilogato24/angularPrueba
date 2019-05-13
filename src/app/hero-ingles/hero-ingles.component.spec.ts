import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInglesComponent } from './hero-ingles.component';

describe('HeroInglesComponent', () => {
  let component: HeroInglesComponent;
  let fixture: ComponentFixture<HeroInglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroInglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
