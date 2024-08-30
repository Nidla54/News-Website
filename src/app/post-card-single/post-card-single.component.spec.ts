import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardSingleComponent } from './post-card-single.component';

describe('PostCardSingleComponent', () => {
  let component: PostCardSingleComponent;
  let fixture: ComponentFixture<PostCardSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCardSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
