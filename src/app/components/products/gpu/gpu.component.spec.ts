import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPUComponent } from './gpu.component';

describe('GPUComponent', () => {
  let component: GPUComponent;
  let fixture: ComponentFixture<GPUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
