import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCsComponent } from './pcs.component';

describe('PCsComponent', () => {
  let component: PCsComponent;
  let fixture: ComponentFixture<PCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
