import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGraphComponent } from './detail-graph.component';

describe('DetailGraphComponent', () => {
  let component: DetailGraphComponent;
  let fixture: ComponentFixture<DetailGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
