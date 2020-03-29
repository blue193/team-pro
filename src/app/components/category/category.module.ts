import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryComponent } from './components/category/sub-category/sub-category.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideNavComponent } from './components/left-side-nav/left-side-nav.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  {
    path: ':category_slug',
    component: CategoryComponent,
    children: [
      {path: '', component: SubCategoryComponent},  
    ]
  },
  {
    path: ':category_slug/:subcategory_slug',
    component: CategoryComponent,
    children: [ 
      {path: '', component: SubCategoryComponent},  
    ]
  },
];

@NgModule({
  declarations: [CategoriesComponent, CategoryComponent, SubCategoryComponent, HeaderComponent, LeftSideNavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CategoryModule { }
