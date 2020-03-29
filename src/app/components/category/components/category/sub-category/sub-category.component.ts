import { ApiService } from '../../../../../shared/_services/api.service';
import { Category } from '../../../../../shared/_models/category.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'xb-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  subCategory: Category;
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params.subcategory_slug){
        this.apiService.getSubCategoryBySlug(params.subcategory_slug).subscribe(response =>  this.subCategory = response);
      }  
    });

  }

}
