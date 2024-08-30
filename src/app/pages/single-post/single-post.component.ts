import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { DatePipe, NgFor } from '@angular/common';
import { PostCardFeaturedComponent } from '../../layouts/post-card-featured/post-card-featured.component';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [
    PostCardComponent,
    CommentFormComponent,
    CommentListComponent,
    DatePipe,
    PostCardFeaturedComponent,
    NgFor,
  ],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent {
  postData: any;
  postFeaturedData: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      this.postService.countViews(val['id']);
      this.postService.loadOnePost(val['id']).subscribe((post) => {
        this.postData = post;
        console.log('this is it' + this.postData.title);
      });
    });

    this.postService.loadFeaturedData().subscribe((val) => {
      this.postFeaturedData = val;
    });
  }
}
