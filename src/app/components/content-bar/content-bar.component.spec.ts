import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBarComponent } from './content-bar.component';

describe('ContentBarComponent', () => {
  let component: ContentBarComponent;
  let fixture: ComponentFixture<ContentBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentBarComponent]
    });
    fixture = TestBed.createComponent(ContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
