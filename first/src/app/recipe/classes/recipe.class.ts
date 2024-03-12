import { User } from "../../user/user.class"
import { Category } from "./category.class"
import { Component1 } from "./component.class"

export class Recipe{

    id!:number
    name!:string
    category!:Category
    minutes!:number
    difficultyLevel!:number
    componentsList!: Component1[]
    preparationList!:string[]
    user!:User
    imgRouting!:string
}