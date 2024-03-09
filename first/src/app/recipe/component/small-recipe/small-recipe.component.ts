import { Component, Input } from '@angular/core';
import { Recipe } from '../../classes/recipe.class';

@Component({
  selector: 'app-small-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss'
})
export class SmallRecipeComponent {
  @Input() recipeChild: Recipe | undefined

}
