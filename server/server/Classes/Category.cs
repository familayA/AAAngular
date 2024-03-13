namespace server.Classes
{
    public class Category
    {
        private static int id = 0;
        public int Id { get; }
        public string Name { get; set; }
        public string Icon{ get; set; }
        public Category(string name, string iconPath)
        {
            id++;
            Id = id;
            Name = name;
            Icon = iconPath;
        }
    }
}
