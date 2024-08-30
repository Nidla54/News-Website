import { Component, NgModule, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { NgFor } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  userData: any;

  constructor(private dataBaseCategories: CategoriesService) {}

  ngOnInit(): void {
    this.dataBaseCategories.loadData().subscribe(
      (data) => {
        this.userData = data;
        console.log('UserData:', this.userData);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
