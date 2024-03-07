using Microsoft.EntityFrameworkCore;
using serever_good.models;

namespace serever_good
{
    public class DataContext : DbContext
    {
        public DbSet<User> UserList { get; set; }
        public DbSet<Recipe> RecipeList { get; set; }

        public DbSet<Catgory> CategoryList1 { get; set; }
        public DbSet<Component> ComponentList { get; set; }
        public DbSet<Preparation> Preparations { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Server = myServerAddress; Database = myDataBase; Trusted_Connection = True;
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=recipe;Trusted_Connection = True");
            //optionsBuilder.UseSqlServer("Server=DESKTOP-SI8MC0H\\LOCALDB;Database=my_recipe");
            //optionsBuilder.UseSqlServer("data source=DESKTOP-SI8MC0H\\localdb;initial catalog=my_recipe;Integrated Security=true;MultipleActiveResultSets=True;App=EntityFramework;TrustServerCertificate=true;");
        }
    }
}






