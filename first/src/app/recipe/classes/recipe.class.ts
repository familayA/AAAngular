
import { User } from "../../user/user.class"
import { Category } from "./category.class"
import { Component1 } from "./component.class"

export class Recipe{
    /*
    public int Id{ get; set; }
public string Name { get; set; }
public Catgory Catgory { get; set; }//????
public int Minutes { get; set; }
public DifficultyLevel DifficultyLevel { get; set; }
public DateTime DateAdd { get; set; }
public List<Component> ComponentList { get; set; }
public List<Preparation> PreparationList { get; set; }
public User User{ get; set; }
public string ImgRouting { get; set; }
    */
    id!:number
    name!:string
    category!:Category
    minutes!:number
    difficultyLevel!:string
    componentsList!: Array<Component1>
    preparationList!:Array<string>
    user!:User
    imgRouting!:string
}