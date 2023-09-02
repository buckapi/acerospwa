import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { RestService } from '@app/services/rest.service';
import { CATEGORIES } from '@app/services/categories.services';
import { Category } from '@app/interfaces/category';
import { Route } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any;
  category:any;
  
  constructor(
    public yeoman:Yeoman,
    public restService:RestService
  ) 
  {
    this.categories=CATEGORIES
    // this.loadCategories();
  }
  setCategory(i:any){
   let indice= i;
   this.restService.getAllCategory().subscribe(
    response => {
      this.categories = response;}
)
  }

  // loadCategories(){
  //   this.restService.getAllCategory().subscribe(
  //     response => {
  //       this.categories = response;
  //       console.log("Categorías cargadas:", this.categories);
  //     },
  //     error => {
  //       console.error("Error al cargar las categorías:", error);
  //     }
  //   );
  // }
  setRoute(par:any){
    let parametro=par;
    this.yeoman.virtualRoute=parametro;
  }
  view(id:any){
    this.yeoman.preview=this.yeoman.products[id];
    this.setRoute('shop');
  }
  ngOnInit(): void {
  }

}
