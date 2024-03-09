import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';
import { SmallRecipeComponent } from './component/small-recipe/small-recipe.component';
import { AllRecipeComponent } from './component/all-recipe/all-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [AddRecipeComponent,EditRecipeComponent,SmallRecipeComponent,AllRecipeComponent],
  imports: [
    CommonModule,HttpClientModule,RecipeRoutingModule,NgFor
  ],
  exports:[AllRecipeComponent,AddRecipeComponent,EditRecipeComponent,SmallRecipeComponent]
})
export class RecipeModule { }
