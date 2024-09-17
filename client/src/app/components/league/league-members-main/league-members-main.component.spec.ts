import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueMembersMainComponent } from './league-members-main.component';

describe('LeagueMembersMainComponent', () => {
  let component: LeagueMembersMainComponent;
  let fixture: ComponentFixture<LeagueMembersMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueMembersMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueMembersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
