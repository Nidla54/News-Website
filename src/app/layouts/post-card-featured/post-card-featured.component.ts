import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card-featured',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './post-card-featured.component.html',
  styleUrl: './post-card-featured.component.css',
})
export class PostCardFeaturedComponent {
  @Input() postData: any;

  ngOnInit(): void {}
}
