import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentlComponent } from './contentl.component';

describe('ContentlComponent', () => {
  let component: ContentlComponent;
  let fixture: ComponentFixture<ContentlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
