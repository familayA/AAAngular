using Microsoft.AspNetCore.Mvc;
using serever_good.models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serever_good.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public RecipeController(DataContext context)
        {
            _dataContext = context;
        }
        // GET: api/<RecipeController>
        [HttpGet]
        public ActionResult<List<Recipe>> Get()
        {
            return Ok( _dataContext.RecipeList.ToList());
        }

        // GET api/<RecipeController>/5
        [HttpGet("{id}")]
        public ActionResult< Recipe> Get(int id)
        {
            return Ok(_dataContext.RecipeList.ToList().Find(x => x.Id == id));
        }

        // POST api/<RecipeController>
        [HttpPost]
        public ActionResult Post([FromBody] Recipe recipe)
        {
            _dataContext.RecipeList.Add(recipe);
           _dataContext.SaveChanges();
            return Ok();
        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Recipe recipe)
        {
            int x=_dataContext.RecipeList.ToList().FindIndex(x=> x.Id == id);
            _dataContext.RecipeList.ToList()[x] = recipe;
            _dataContext.SaveChanges();
            return Ok();
        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _dataContext.RecipeList.Remove(_dataContext.RecipeList.ToList().Find(x => x.Id == id));
            _dataContext.SaveChanges();
            return Ok();
        }
    }
}
