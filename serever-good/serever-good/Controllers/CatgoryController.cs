using Microsoft.AspNetCore.Mvc;
using serever_good.models;
using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serever_good.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatgoryController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public CatgoryController(DataContext dataContext)
        {
            _dataContext = dataContext;

        }
        // GET: api/<ValuesController>
        [HttpGet]
        public HashSet<Catgory> Get()
        {
            return _dataContext.CategoryList1.ToHashSet();
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public Catgory Get(string name)
        {
            return _dataContext.CategoryList1.ToList().Find(x => x.Name == name);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] Catgory value)
        {
            _dataContext.CategoryList1.Add(value);
            _dataContext.SaveChanges();
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Catgory value)
        {
            int x = _dataContext.CategoryList1.ToList().FindIndex(x => x.Id == id);
            _dataContext.CategoryList1.ToList()[x] = value;
            _dataContext.SaveChanges();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _dataContext.CategoryList1.Remove(_dataContext.CategoryList1.ToList().Find(x => x.Id == id));
            _dataContext.SaveChanges();
        }
    }
}
