import { ApiService } from 'src/app/shared/_services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Categories } from './../../../../shared/_models/category.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'xb-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {

  categories: Categories = [];
  expandedCategoryMenu: string[] = [];
  category_slug: string; 
  subcategory_slug: string; 

  constructor(private activerouter: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {

    this.activerouter.params.subscribe((params) => { 
      this.category_slug = params.category_slug;
      this.expandedCategoryMenu.push(this.category_slug);
      this.subcategory_slug = (params.subcategory_slug)?(params.subcategory_slug):'';
    });
    this.apiService.getAllCategories().subscribe(response =>  this.categories = response);
  }

  toggleMenu(menu_slug: string){
    if (this.expandedCategoryMenu.indexOf(menu_slug) === -1 ){
      this.expandedCategoryMenu.push(menu_slug);
    }else{
      this.expandedCategoryMenu.splice(this.expandedCategoryMenu.indexOf(menu_slug), 1);
    }
  }

}
