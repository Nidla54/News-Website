import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:id', component: SingleCategoryComponent },
  { path: 'post/:id', component: SinglePostComponent },

  { path: 'term-conditions', component: TermsAndConditionsComponent },
  { path: 'contact', component: ContactUsComponent },
];