using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Classes;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private static List<Category> categories = new List<Category> {
         new Category("Baking", "../../../../assets/category/baking.png"), 
         new Category("Bread", "../../../../assets/category/bread.png"), 
         new Category("Dessert", "../../../../assets/category/desserts.png"),
         new Category("Dinner", "../../../../assets/category/dinner.png"), 
         new Category("Easy", "../../../../assets/category/easy.png"), 
         new Category("Medium", "../../../../assets/category/medium.png"), 

        };

        // GET: api/Category
        [HttpGet]
        public ActionResult<IEnumerable<Category>> Get()
        {
            return categories;
        }

        // GET: api/Category/{id}
        [HttpGet("{name}")]
        public ActionResult<Category> Get(string name)
        {
            var category = categories.Find(c => c.Name == name);
            if (category == null)
            {
                return NotFound();
            }
            return category;
        }

        // POST: api/Category
        [HttpPost]
        public ActionResult<Category> Post([FromBody] Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            categories.Add(category);
            return CreatedAtAction(nameof(Get), new { id = category.Id }, category);
        }

        // PUT: api/Category/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Category updatedCategory)
        {
            if (id != updatedCategory.Id)
            {
                return BadRequest();
            }
            var category = categories.Find(c => c.Id == id);
            if (category == null)
            {
                return NotFound();
            }

            category.Name = updatedCategory.Name;
            category.Icon = updatedCategory.Icon;
            return NoContent();
        }

        // DELETE: api/Category/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var category = categories.Find(c => c.Id == id);
            if (category == null)
            {
                return NotFound();
            }
            categories.Remove(category);
            return NoContent();
        }
    }
}
