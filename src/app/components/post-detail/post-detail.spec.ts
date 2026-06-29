import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail';

describe('PostDetailComponent', () => { // Changed the describe name too
  let component: PostDetailComponent; // Updated type
  let fixture: ComponentFixture<PostDetailComponent>; // Updated type

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailComponent], // Updated import in TestBed
    }).compileComponents();

    fixture = TestBed.createComponent(PostDetailComponent); // Updated component creation
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
