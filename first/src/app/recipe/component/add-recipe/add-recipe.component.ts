import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../classes/recipe.class';
import Swal from 'sweetalert2';
import { Category } from '../../classes/category.class';

@Component({
  selector: 'app-add-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent implements OnInit {

  // FormGroup for recipe data
  public recipeForm!: FormGroup;
  public recipe!:Recipe
  // Available categories
  public categories!: Category[] 

  constructor(private recipeService: RecipeService,private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getAllCategory().subscribe({
      next: (res: any) => {
        this.categories=res;
        // console.log(res);
        // console.log(this.recipe,"succes")
        // Swal.fire({
        //   title: "The Internet?",
        //   text: "That thing is still around?",
        //   icon: "success"
        // });
        // // this.sweetAlertService.success('Recipe added successfully!');
        // // Navigate to All Recipes page
        // this.router.navigate(['/all-recipes']);
        

        },
      error: (err) => {
        console.log(err);

      }
    })
    this.recipeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      image: new FormControl(null),
      ingredients: new FormArray([]),
      instructions: new FormArray([])
    });
  }

  // Function to add new ingredient field
  addIngredient() {
    // const ingredients = this.recipeForm.get('ingredients') as FormArray;
    const ingredients = this.recipeForm?.value.ingredients as FormArray
    ingredients.push(new FormControl(''));
  }

  // Function to add new instruction field
  addInstruction() {
    const instructions = this.recipeForm?.value.instructions as FormArray;
    instructions.push(new FormControl(''));
  }
  removeIngredient(index: number) {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }
  
  // Function to save the recipe
  onSubmit() {
    if (this.recipeForm?.invalid) {
      return;
    }


    // this.recipe.name=this.recipeForm?.value.name
    // this.recipe.category=this.recipeForm?.value.category
    // this.recipe.minutes=this.recipeForm?.value.minutes
    // this.recipe.difficultyLevel=this.recipeForm?.value.difficultyLevel
    // this.recipe.componentsList=this.recipeForm?.value.componentsList
    // this.recipe.preparationList=this.recipeForm?.value.preparationList
    // this.recipe.user=this.recipeForm?.value.user
    // this.recipe.imgRouting=this.recipeForm?.value.imgRouting


    this.recipeService.addRecipe(this.recipeForm?.value).subscribe({
      next: (res: any) => {
        this.recipe=res;
        // console.log(res);
        console.log(this.recipe,"succes")
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "success"
        });
        // this.sweetAlertService.success('Recipe added successfully!');
        // Navigate to All Recipes page
        this.router.navigate(['/all-recipes']);
        

        },
      error: (err) => {
        console.log(err);

      }
    })

    
  }

}