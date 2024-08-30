import { DatePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card-single',
  standalone: true,
  imports: [DatePipe, NgFor, RouterLink],
  templateUrl: './post-card-single.component.html',
  styleUrl: './post-card-single.component.css',
})
export class PostCardSingleComponent {
  @Input() singlePost: any;

  ngOnInit(): void {
    console.log(this.singlePost);
  }
}
