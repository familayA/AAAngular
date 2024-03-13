import { User } from "./user.class"
import { Category } from "./category.class"
import { Component1 } from "./component.class"

export class Recipe{
//ingredients
    id!:number
    name!:string
    category!:string
    minutes!:number
    difficultyLevel!:number
    ingredients!: string[]

    // ingredients!: Component1[]
    instructions!:string[]
    user!:User
    imgRouting!:string
    dateAdd!:Date
    
}