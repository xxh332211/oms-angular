import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayholloComponent } from './sayhollo.component';

describe('SayholloComponent', () => {
  let component: SayholloComponent;
  let fixture: ComponentFixture<SayholloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayholloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
