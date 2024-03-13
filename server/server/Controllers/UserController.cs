using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Classes;
using server.NewClasses;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User> { 
            new User("breslev 18","batya4119712@gmail.com","123456","batya"),
            new User("bb", "1@gmail.com", "123456","chani"),
            new User("bb", "2@gmail.com", "123456","yehudit")

        };


        // GET: api/User
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return users;
        }

        // GET: api/User/{id}
        [HttpGet("{name}")]
        public ActionResult<User> Get(string name)
        {
            //var user = users.FirstOrDefault(u => u.UserName == name);
            //if (user == null)
            //{
            //    return NotFound();
            //}
            return Ok(users.ToList().Find(x => x.Name == name));
        }

        // POST: api/User
        [HttpPost]
        public ActionResult<User> Post([FromBody] NewUser user)
        {
            User u = new User(user.Address, user.Email, user.Password, user.Name);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            users.Add(u);

            return CreatedAtAction(nameof(Get), new { id = u.Id }, user);
        }

        // PUT: api/User/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User updatedUser)
        {
            if (id != updatedUser.Id)
            {
                return BadRequest();
            }
            var user = users.Find(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            user.Address = updatedUser.Address;
            user.Email = updatedUser.Email;
            user.Password = updatedUser.Password;
            return NoContent();
        }

        // DELETE: api/User/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = users.Find(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            users.Remove(user);
            return NoContent();
        }
    }
}
