namespace server.Classes
{
    public class User//לא בדוק
    {
        private static int id = 0;
        public  int Id { get; } 
        public string Name { set; get; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public User(string address, string email, string password,string name)
        {
            id++;
            Id = id;
            Address = address;
            Email = email;
            Password = password;
            Name=name;
        }
    }
}
