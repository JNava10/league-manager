import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLeaguesBarComponent } from './search-leagues-bar.component';

describe('SearchLeaguesBarComponent', () => {
  let component: SearchLeaguesBarComponent;
  let fixture: ComponentFixture<SearchLeaguesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLeaguesBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLeaguesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
