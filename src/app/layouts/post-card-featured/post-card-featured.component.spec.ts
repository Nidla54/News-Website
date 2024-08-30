import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardFeaturedComponent } from './post-card-featured.component';

describe('PostCardFeaturedComponent', () => {
  let component: PostCardFeaturedComponent;
  let fixture: ComponentFixture<PostCardFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardFeaturedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCardFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
