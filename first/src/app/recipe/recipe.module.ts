import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';
import { SmallRecipeComponent } from './component/small-recipe/small-recipe.component';
import { AllRecipeComponent } from './component/all-recipe/all-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeRoutingModule } from './recipe-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
// import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormGroup, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
// import "@coreui/coreui/scss/coreui";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { AlertModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [AddRecipeComponent,EditRecipeComponent,SmallRecipeComponent,AllRecipeComponent],
  imports: [
    CommonModule,HttpClientModule
    ,RecipeRoutingModule,
    MatCardModule, MatButtonModule,
    // CommonModule,
     CardModule,
    ReactiveFormsModule, 
    // BrowserModule
    FormsModule, AlertModule
    // , BrowserAnimationsModule

    // BrowserAnimationsModule
    // AlertModule


  ],
  exports:[AllRecipeComponent,AddRecipeComponent,EditRecipeComponent,SmallRecipeComponent]
})
export class RecipeModule { }
