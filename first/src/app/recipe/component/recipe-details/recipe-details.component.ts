import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../classes/recipe.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-details',
  // standalone: true,
  // imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent implements OnInit {
  public recipeDetails!: Recipe
  public recipeId!: number
  constructor(private route: ActivatedRoute, private _recipeService: RecipeService) { }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.recipeId = param['id'];
      console.log(this.recipeId)
      this._recipeService.getRecipeById(this.recipeId).subscribe({
        next: (res) => {
          this.recipeDetails = res
          console.log("resipeDetails", this.recipeDetails)
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  }
}




