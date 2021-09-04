import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorCreateEditComponent } from './investor-create-edit.component';

describe('InvestorCreateEditComponent', () => {
  let component: InvestorCreateEditComponent;
  let fixture: ComponentFixture<InvestorCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
