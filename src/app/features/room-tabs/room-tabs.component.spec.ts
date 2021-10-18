import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTabsComponent } from './room-tabs.component';

describe('RoomTabsComponent', () => {
  let component: RoomTabsComponent;
  let fixture: ComponentFixture<RoomTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
