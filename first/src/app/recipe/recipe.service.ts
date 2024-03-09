import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './classes/recipe.class';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public baseUrlRecipe='https://localhost:7196/api/Recipe'
  constructor(private http: HttpClient) { }
  getAllRecipe(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrlRecipe)
  }

  // addUser(user: User):Observable<User> {
  //   // this.productsList.push(product)
  //   return this.http.post<User>(this.baseUrl, user)
  // }
}
