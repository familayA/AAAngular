import { Component, Input } from '@angular/core';
import { Recipe } from '../../classes/recipe.class';
import { Router } from '@angular/router';
// import {Component} from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import {Component} from '@angular/core';


@Component({
  selector: 'app-small-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss'
})
export class SmallRecipeComponent {
  constructor(private router:Router){}
  @Input() recipeChild!: Recipe
  recipeDetails(){
    console.log("before move")
    this.router.navigate(["recipe/recipe-details",this.recipeChild?.id])
    console.log("after move")
  }

}
