import { Component, Input } from '@angular/core';
import { Recipe } from '../../classes/recipe.class';

@Component({
  selector: 'app-recipe-details',
  // standalone: true,
  // imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  @Input() recipeDetails: Recipe | undefined
  

}
