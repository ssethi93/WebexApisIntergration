import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembershipsComponent } from './team-memberships.component';

describe('TeamMembershipsComponent', () => {
  let component: TeamMembershipsComponent;
  let fixture: ComponentFixture<TeamMembershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMembershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
