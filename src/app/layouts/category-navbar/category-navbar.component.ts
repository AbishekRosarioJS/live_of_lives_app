import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';


@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit{

  CategoryArray:any;

  constructor(private CategoryService : CategoriesService) {}

  ngOnInit(): void {
    this.CategoryService.loadData().subscribe(val =>{
     this.CategoryArray = val;
    })
    
  }

}
