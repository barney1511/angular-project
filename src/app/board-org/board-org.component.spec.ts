import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOrgComponent } from './board-org.component';

describe('BoardOrgComponent', () => {
  let component: BoardOrgComponent;
  let fixture: ComponentFixture<BoardOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
