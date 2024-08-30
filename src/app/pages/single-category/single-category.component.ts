import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { PostCardSingleComponent } from '../../post-card-single/post-card-single.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [PostCardComponent, PostCardSingleComponent, NgFor],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css',
})
export class SingleCategoryComponent {
  postsArray: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      console.log(val);
      this.postService.loadCategoryPosts(val['id']).subscribe((post) => {
        this.postsArray = post;
      });
    });
  }
}
