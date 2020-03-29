import { Categories } from '../../../../shared/_models/category.model';
import { ApiService } from '../../../../shared/_services/api.service';
import { Component, OnInit } from '@angular/core';
import { categoryData } from 'src/app/shared/_models/category-data.model';

@Component({
  selector: 'xb-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriesData: categoryData;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCategoriesData().subscribe(response => this.categoriesData = response);
  }

}
