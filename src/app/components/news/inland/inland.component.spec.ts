import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlandComponent } from './inland.component';

describe('InlandComponent', () => {
  let component: InlandComponent;
  let fixture: ComponentFixture<InlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
