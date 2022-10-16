import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAMComponent } from './ram.component';

describe('RAMComponent', () => {
  let component: RAMComponent;
  let fixture: ComponentFixture<RAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
