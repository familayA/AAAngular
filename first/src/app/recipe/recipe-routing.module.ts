import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AllRecipeComponent } from './component/all-recipe/all-recipe.component';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';




const RECIPE_ROUTES: Route[] = [
  { path: '', redirectTo: 'all-recipe', pathMatch: 'full' },
  { path: 'all-recipe', component: AllRecipeComponent },
  { path: 'add-recipe', component:AddRecipeComponent },
  ///////להמשיך
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(RECIPE_ROUTES)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
