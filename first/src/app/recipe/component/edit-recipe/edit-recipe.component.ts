// import { Component } from '@angular/core';
// import Swal from 'sweetalert2';
// import { RecipeService } from '../../recipe.service';
// import { Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { CategoryService } from '../../../category.service';
// import { Category } from '../../classes/category.class';

// @Component({
//   selector: 'app-edit-recipe',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './edit-recipe.component.html',
//   styleUrl: './edit-recipe.component.scss'
// })
// export class EditRecipeComponent {
// save() {
// throw new Error('Method not implemented.');
// }
//   categories: Category[] = [];


// public recipeForm!:FormGroup
//   path: string | undefined;
//   // public userName!:string
//   private getCategories(): void {
//     this._categoryService.getAllCategory().subscribe(categories => {
//       this.categories = categories;
//     });
//   }
//   constructor(private _recipeService: RecipeService,
//     private _categoryService:CategoryService
//     , private router: Router) { }
//   ngOnInit(): void {
//     this.getCategories()
//       console.log("good")
//       this.recipeForm = new FormGroup({
//         "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
//         "category": new FormControl("", [Validators.required, Validators.minLength(6)]),
//         "imgRouting": new FormControl("", ),
//         // "user": new FormControl("", [Validators.minLength(3)]),
//         "instructions": new FormControl("", ),
//         "ingredients": new FormControl("", ),
//         "difficultyLevel": new FormControl("", ),
//         "minutes": new FormControl("", ),
//       })

//   }
//   // save() {
//   //   console.log("log====", this._userService.getUserByName(this.RegisterForm.value.name))
//   //   this._userService.getUserByName(this.RegisterForm.value.name).subscribe({
//   //     next: (res) => {
//   //       console.log("res", res);
//   //       this.name2 = res;
//   //       console.log("name2", this.name2)
//   //       sessionStorage.setItem('currentUserName', this.RegisterForm.value.name);
//   //       if (this.name2 != null) {
//   //         Swal.fire({
//   //           icon: "info",
//   //           title: "Oops...",
//   //           text: "User registered in the system, transferred to the login page!!!",
//   //           // footer: '<a href="#">Why do I have this issue?</a>'
//   //         });
//   //         sessionStorage.setItem('isGetFromRgister', 'true')
//   //         this.router.navigate(["user/login"])
//   //       }
//   //       else {
//   //         this._userService.addUser(this.RegisterForm.value).subscribe({
//   //           next: (res) => {
//   //             // console.log(res);
//   //             this.registeruser = res;
//   //             console.log(this.registeruser)
//   //             // Swal.fire({
//   //             //   title: 'you register!!!!',
//   //             //   html: 'Transferred to show the recipes',
//   //             //   timer: 2000,
//   //             //   timerProgressBar: true,
//   //             //   didOpen: () => {
//   //             //     Swal.showLoading(null);
//   //             //     this.timer = Swal
//   //             //     this.timerInterval = setInterval(() => {
//   //             //       this.timer.textContent = `${Swal.getTimerLeft()}`;
//   //             //     }, 100);
//   //             //   },
//   //             //   willClose: () => {
//   //             //     clearInterval(this.timerInterval);
//   //             //   }
//   //             // }).then((result) => {
//   //             //   if (result.dismiss === Swal.DismissReason.timer) {
//   //             //     console.log('I was closed by the timer');
//   //             //   }
//   //             // });
//   //             // this.router.navigate(["recipe"])
//   //             this.enterToWeb()

//   //           },
//   //           error: (err) => {
//   //             console.log(err);

//   //           }
//   //         })
//   //       }

//   //     },
//   //     error: (err) => {
//   //       console.log(err);

//   //     }
//   //   })

//   // }
//   // enterToWeb() {
//   //     console.log("this.path",this.path)
//   //     if (this.path ===undefined) {
//   //       console.log("go to recipy");
//   //       Swal.fire({
//   //         title: 'you register!!!!',
//   //         html: 'Transferred to show the recipes',
//   //         timer: 2000,
//   //         timerProgressBar: true,
//   //         didOpen: () => {
//   //           Swal.showLoading(null);
//   //           this.timer = Swal
//   //           this.timerInterval = setInterval(() => {
//   //             this.timer.textContent = `${Swal.getTimerLeft()}`;
//   //           }, 100);
//   //         },
//   //         willClose: () => {
//   //           clearInterval(this.timerInterval);
//   //         }
//   //       }).then((result) => {
//   //         if (result.dismiss === Swal.DismissReason.timer) {
//   //           console.log('I was closed by the timer');
//   //         }
//   //       });
//   //       this.router.navigate(["recipe"])
//   //     }
//   //     else{
//   //       let id=sessionStorage.getItem("recipe-details")
//   //       console.log(id)
//   //       // this.router.navigate([`${{this.path}}`])
//   //       if(id!=null){
//   //         console.log("id",id)
//   //         this.router.navigate(["recipe/recipe-details/", parseInt(id)]);
//   //       }
//   //       else if(sessionStorage.getItem("add-recipe")==="true"){
//   //         this.router.navigate(["recipe/add-recipe"]);

//   //       }
//   //     }
//   //   }
// }


import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../recipe.service';
import Swal from 'sweetalert2';
import { Category } from '../../../classes/category.class';
import { CategoryService } from '../../../category.service';
import { Recipe } from '../../../classes/recipe.class';
import { User } from '../../../classes/user.class';
import { UserService } from '../../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   editRecipeForm: FormGroup | any;
//   editCategories: Category[] = [];
// 	editCategoryId: any;
// 	editRecipe: Recipe=new Recipe();
// 	editUserName: any;

//   constructor(
//     private fb: FormBuilder,
//     private categoryService: CategoryService,
//     private recipeService: RecipeService,
// 	private _userService:UserService,
// 	private router:Router
//    ) { }

//   ngOnInit(): void {
// 	this.checkUserLogin();
//     this.getCategories();
//     this.initForm();
//   }

//   initForm(): void {
//     this.editRecipeForm = this.fb.group({
//       name: ['', Validators.required],
//       minutes: ['', Validators.required],
//       difficultyLevel: ['', Validators.required],
//       dateAdded: ['', Validators.required],
//       category: ['', Validators.required],
//       ingredients: this.fb.array([]),
//       instructions: this.fb.array([]),
//       imgRouting:['']
//     });
//   }

//   get ingredients(): FormArray {
//     return this.editRecipeForm.get('ingredients') as FormArray;
//   }



//   addIngredient(): void {
//     this.ingredients.push(this.fb.control(''));
//     console.log(this.ingredients)
//   }  addInstruction(): void {
//     this.instructions.push(this.fb.control(''));
//     console.log(this.instructions)
//   }


//   removeInstructions(index: number): void {
//     this.instructions.removeAt(index);
//   }
//   removeIngredient(index: number): void {
//     this.ingredients.removeAt(index);
//   }
//   get instructions(): FormArray {
//     return this.editRecipeForm.get('instructions') as FormArray;
//   }


//   onSubmit(): void {
// 	this.editCategoryId = this.editRecipeForm.value.category
// 	console.log("categoryName--------", this.editCategoryId)
// 	this.categoryService.getCategoryById(this.editCategoryId).subscribe({
// 		next: (res) => {
// 			this.editRecipe.category = res;
// 			console.log("this.recipe.category", this.editRecipe.category)
// 		},
// 		error: (err) => {
// 			console.log(err);
// 		}
// 	});
// 	this.editUserName = sessionStorage.getItem("currentUserName")?.toString()
// 	console.log("userName-------------------", this.editUserName)
// 	this._userService.getUserByName(this.editUserName?.toString()).subscribe({
// 		next: (res) => {
// 			this.editRecipe.user = res;
// 			console.log("this.recipe.user", this.editRecipe.user)
// 		},
// 		error: (err) => {
// 			console.log(err);
// 		}
// 	});
// 	this.editRecipe.name = this.editRecipeForm.value.name
// 		this.editRecipe.minutes = this.editRecipeForm.value.minutes
// 		this.editRecipe.ingredients = this.editRecipeForm.value.ingredients
// 		this.editRecipe.difficultyLevel = this.editRecipeForm.value.difficultyLevel
// 		this.editRecipe.imgRouting = this.editRecipeForm.value.imgRouting
// 		this.editRecipe.instructions = this.editRecipeForm.value.instructions
// 	console.log("--------------------recipe--------------------",this.editRecipe)

//     this.recipeService.addRecipe(this.editRecipe).subscribe(() => {
//       let timerInterval!: any;

//       function closePopup() {
//         clearInterval(timerInterval);
//         Swal.close();
//       }
      
//       Swal.fire({
//         title: "Adding your new recipe! Thanks!",
//         html: "Saving<b></b> ms",
//         timer: 500,
//         timerProgressBar: true,
//         didOpen: () => {
//         //   Swal.showLoading();
//           const timerEl = Swal.getPopup()?.querySelector("b");
      
//           if (timerEl) {
//             timerInterval = setInterval(() => {
//               timerEl.textContent = `${Swal.getTimerLeft()}`;
//             }, 100);
//           } else {
//             console.error("לא נמצא אלמנט <b> ב-popup");
//             closePopup();
//           }
//         },
//         willClose: () => {
//           clearInterval(timerInterval);
//         }
//       }).then((result) => {
//         /* קרא עוד על טיפול בביטולים למטה */
//         if (result.dismiss === Swal.DismissReason.timer) {
//           console.log("נסגרתי על ידי הטיימר");
//         }
//       });
      
//       // הוסף כפתור לסגירה ידנית
//       const closeButton = document.createElement("button");
//       closeButton.textContent = "סגור";
//       closeButton.classList.add("swal2-button", "swal2-button--cancel");
//       closeButton.addEventListener("click", closePopup);
      
//       Swal.getPopup()?.appendChild(closeButton);
//       this.resetForm();
//     })
    
// }

// resetForm(): void {
//   // Reset form values
//   this.editRecipeForm.reset();

//   // Clear ingredient and instruction arrays
//   this.ingredients.clear();
//   this.instructions.clear();
// }
//   private getCategories(): void {
//     this.categoryService.getAllCategory().subscribe(categories => {
//       this.editCategories = categories;
//     });
//   }
//   checkUserLogin() {
// 	console.log("before move");
// 	if (sessionStorage.getItem("currentUserName") === null) {
// 		// שמור את נתוני הניווט לשימוש לאחר ההרשמה
// 		// this.loginRedirectUrl = ;
// 		Swal.fire({
// 			title: "The system was not logged in!",
// 			text: "Move to login!",
// 			icon: "info"
// 		}).then(() => {
// 			this.router.navigate(["user/login"]);
// 			sessionStorage.setItem("isPath", "true")
// 			sessionStorage.setItem("add-recipe", `true`)
// 		});

// 	}
// 	// this.router.navigate(["recipe/recipe-details", this.recipeChild?.id]);

// 	console.log("after move");


// }
}
