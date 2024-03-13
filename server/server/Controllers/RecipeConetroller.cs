using Microsoft.AspNetCore.Mvc;
using server.Classes;
using System.Collections.Generic;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private static readonly List<Recipe> _recipes = new List<Recipe>
        {
                new Recipe(
  "Oatmeal Raisin Cookies",
  "Baking", // Baking category ID
  30,
  2, // Medium difficulty level
  DateTime.Now,
  new List<string>() {
    "2 1/4 cups rolled oats",
    "1 teaspoon baking soda",
    "1 teaspoon ground cinnamon",
    "1 cup (2 sticks) unsalted butter, softened",
    "1 cup granulated sugar",
    "1 cup packed light brown sugar",
    "2 large eggs",
    "2 teaspoons pure vanilla extract",
    "1 1/2 cups raisins",
    "1 cup chopped walnuts (optional)"
  },
  new List<string>() {
    "Preheat oven to 375 degrees F (190 degrees C).",
    "... (remaining instructions)"
  },
  user: "batya", // Replace with actual user ID
  imgRouting: "../../../../assets/oatmeal_raisin_cookies2.jpg"
),
//                new Recipe(
//  "Cheese Pizza",
//  "Bread", // Dinner category ID
//  60,
//  2, // Medium difficulty level
//  DateTime.Now,
//  new List<string>() {
//    "1 package (1 pound) active dry yeast",
//    "1 teaspoon sugar",
//    "1 1/2 cups warm water",
//    "3 1/2 cups all-purpose flour",
//    "2 tablespoons olive oil",
//    "1 teaspoon salt",
//    "1 (28-ounce) can crushed tomatoes",
//    "1 teaspoon dried oregano",
//    "1/2 teaspoon garlic powder",
//    "1 cup shredded mozzarella cheese",
//    "1/2 cup shredded cheddar cheese"
//  },
//  new List<string>() {
//    "In a large bowl, combine yeast, sugar, and warm water. Let sit for 5 minutes until foamy.",
//    "... (remaining instructions)"
//  },
//  user: "chani", // Replace with actual user ID
//  imgRouting: "../../../../assets/cheese_pizza.jpg"
//,)
                new Recipe(
  "Banana Bread",
  "Baking", // Bread category ID
  50,
  1, // Easy difficulty level
  DateTime.Now,
  new List<string>() {
    "3 ripe bananas, mashed",
    "1 1/2 cups all-purpose flour",
    "1 teaspoon baking soda",
    "1/2 teaspoon salt",
    "1/2 cup (1 stick) unsalted butter, softened",
    "3/4 cup granulated sugar",
    "1 large egg",
    "1 teaspoon pure vanilla extract",
    "1/2 cup chopped walnuts (optional)"
  },
  new List<string>() {
    "Preheat oven to 350 degrees F (175 degrees C).",
    "... (remaining instructions)"
  },
  user: "yehudit", // Replace with actual user ID
  imgRouting: "../../../../assets/banana_bread.jpg"
),
                new Recipe(
  "Brownies",
  "Dessert", // Baking category ID
  125,
  3, // Medium difficulty level
  DateTime.Now,
  new List<string>() {
    "1 1/2 cups all-purpose flour",
    "1 teaspoon baking soda",
    "1/2 teaspoon salt",
    "1 cup (2 sticks) unsalted butter, softened",
    "2 cups granulated sugar",
    "4 large eggs",
    "1 teaspoon pure vanilla extract",
    "1 cup unsweetened cocoa powder",
    "1 cup chopped walnuts (optional)"
  },
  new List<string>() {
    "Preheat oven to 350 degrees F (175 degrees C).",
    "... (remaining instructions)"
  },
  user: "batya", // Replace with actual user ID
  imgRouting: "../../../../assets/brownies.jpg"
)
        };


        // GET: api/recipes - קבלת כל המתכונים
        [HttpGet]
        public ActionResult<IEnumerable<Recipe>> Get()
        {
            return Ok(_recipes);
        }

        // GET: api/recipes/{id} - קבלת מתכון לפי מזהה
        [HttpGet("{id}")]
        public ActionResult<Recipe> Get(int id)
        {
            var recipe = _recipes.Find(r => r.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }
            return Ok(recipe);
        }

        //// POST: api/recipes - הוספת מתכון חדש
        //[HttpPost]
        //public ActionResult<Recipe> Post([FromBody] Recipe recipe)
        //{
        //    Recipe r = new Recipe(recipe.Name, recipe.CategoryId, recipe.Minutes, recipe.DifficultyLevel, recipe.DateAdd, recipe.ComponentList, recipe.PreparationList, recipe.User, recipe.ImgRouting);
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _recipes.Add(r);
        //    // return CreatedAtAction(nameof(Get), new { id = r.RecipeId }, r);
        //    return r;
        //}
        [HttpPost]
        public ActionResult<Recipe> Post([FromBody] Recipe recipe)
        {
            //Recipe r = new Recipe(recipe.Name, recipe.Category, recipe.Minutes, recipe.DifficultyLevel, recipe.DateAdd, recipe.Ingredients, recipe.Instructions, recipe.User, recipe.ImgRouting);
            Console.WriteLine(recipe);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Console.WriteLine(recipe);
            _recipes.Add(recipe);
            return CreatedAtAction(nameof(Get), new { id = recipe.Id }, recipe);
        }


        // PUT: api/recipes/{id} - עדכון מתכון קיים
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Recipe updatedRecipe)
        {
            if (id != updatedRecipe.Id)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recipe = _recipes.Find(r => r.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }

            recipe.Name = updatedRecipe.Name;
            recipe.Category = updatedRecipe.Category;
            recipe.Minutes = updatedRecipe.Minutes;
            recipe.DifficultyLevel = updatedRecipe.DifficultyLevel;
            recipe.Ingredients = updatedRecipe.Ingredients;
            recipe.Instructions = updatedRecipe.Instructions;
            recipe.User = updatedRecipe.User;
            recipe.ImgRouting = updatedRecipe.ImgRouting;

            return NoContent();
        }

        // DELETE: api/recipes/{id} - מחיקת מתכון
        [HttpDelete("{name}")]
        public IActionResult Delete(string name)
        {
            var recipe = _recipes.Find(r => r.Name == name);
            if (recipe == null)
            {
                return NotFound();
            }

            _recipes.Remove(recipe);
            return NoContent();
        }
    }
}
