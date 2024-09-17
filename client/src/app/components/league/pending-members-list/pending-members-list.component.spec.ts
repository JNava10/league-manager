import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingMembersListComponent } from './pending-members-list.component';

describe('PendingMembersListComponent', () => {
  let component: PendingMembersListComponent;
  let fixture: ComponentFixture<PendingMembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingMembersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
