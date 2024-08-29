import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesDashboardComponent } from './leagues-dashboard.component';

describe('LeaguesDashboardComponent', () => {
  let component: LeaguesDashboardComponent;
  let fixture: ComponentFixture<LeaguesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaguesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaguesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
