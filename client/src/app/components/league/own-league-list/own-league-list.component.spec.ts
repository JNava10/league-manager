import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnLeagueListComponent } from './own-league-list.component';

describe('OwnLeagueListComponent', () => {
  let component: OwnLeagueListComponent;
  let fixture: ComponentFixture<OwnLeagueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnLeagueListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnLeagueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
