import { iBlog } from './../../shared/_models/blog.model';
import { Categories } from './../../shared/_models/category.model';
import { ApiService } from './../../shared/_services/api.service';
import { iVideo } from 'src/app/shared/_models/video.model';
import { CommonApiService } from './../../shared/_services/common-api.service';
import { ServiceDialogBoxComponent } from './servicedialogbox/servicedialogbox.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/shared/_models/item.model';
import { Service } from 'src/app/shared/_models/service.model';

@Component({
  selector: 'xb-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  servicesData: Service[];
  items: Item[];
  videos: iVideo[];
  blogs: iBlog[];
  urlSafe: any;
  carouselOptions = {
    margin: 25,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        loop: true,
        items: 1,
        nav: true,
        autoplay: true,
      },
      600: {
        loop: true,
        items: 1,
        nav: true,
        autoplay: true,
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
        autoplay: true,
      },
      1500: {
        items: 2,
        nav: true,
        loop: true,
        autoplay: true,
      }
    }
  }

  slickSlideConfig = {
    "dots": true,
    "infinite": false,
    "centerMode": true,
    "speed": 300,
    "slidesToShow": 3,
    "prevArrow": false,
    "nextArrow": false,
    "autoplay": true,
    "slidesToScroll": 1,
    "responsive": [{
      "breakpoint": 991,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
    ]
  }

  categories: Categories[];
  trendingProject;

  constructor(
    public dialog: MatDialog,
    private commonApiService: CommonApiService,
    private apiService: ApiService) { }

  ngOnInit() {
    // Append class to body tag.
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing');
    this.apiService.getAllCategories(true).subscribe(response => this.categories = response);
    this.commonApiService.getAllVideos().subscribe(res => this.videos = res);
    this.commonApiService.getAllBlogs().subscribe(res => this.blogs = res);
    this.apiService.getTrendingProjects().subscribe(response => { this.trendingProject = response; });
    this.apiService.getAllServices().subscribe(res => this.servicesData = res);
    this.apiService.getAllItems().subscribe(res => this.items = res);
  }

  openDetailDialogBox(service): void {
    this.dialog.open(ServiceDialogBoxComponent, {
      data: service
    });
  }

}
