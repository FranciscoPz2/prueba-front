import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentrComponent } from './contentr.component';

describe('ContentrComponent', () => {
  let component: ContentrComponent;
  let fixture: ComponentFixture<ContentrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
