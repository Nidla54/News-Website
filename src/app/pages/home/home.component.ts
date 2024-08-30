import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { PostCardFeaturedComponent } from '../../layouts/post-card-featured/post-card-featured.component';

import { NgFor } from '@angular/common';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, NgFor, PostCardFeaturedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  userFeaturedData: any;
  userLatestData: any;

  constructor(private dataBasePosts: PostsService) {}

  ngOnInit(): void {
    this.dataBasePosts.loadFeaturedData().subscribe(
      (data) => {
        this.userFeaturedData = data;
        console.log('UserData:', this.userFeaturedData);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );

    this.dataBasePosts.loadLatestData().subscribe(
      (data) => {
        this.userLatestData = data;
        console.log('UserData:', this.userLatestData);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
