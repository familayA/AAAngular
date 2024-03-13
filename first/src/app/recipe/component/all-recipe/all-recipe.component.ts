import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../classes/recipe.class';
import { RecipeService } from '../../recipe.service';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';

@Component({
  selector: 'app-all-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './all-recipe.component.html',
  styleUrl: './all-recipe.component.scss'
})
export class AllRecipeComponent implements OnInit{
  allRecipe!:Recipe[]
  constructor(private _recipeService: RecipeService){}
  ngOnInit(): void {
    this._recipeService.getAllRecipe().subscribe({
      next: (res) => {
        this.allRecipe = res;
        console.log(this.allRecipe)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



}
