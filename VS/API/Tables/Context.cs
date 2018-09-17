using Microsoft.EntityFrameworkCore;

namespace API.Tables
{
  public class Context : DbContext
  {
    public Context(DbContextOptions<Context> options) : base(options)
    {
      Database.Migrate();
    }
    public DbSet<PP_Category> Categories { get; set; }
    public DbSet<PP_CentricScore> CentricScores { get; set; }
    public DbSet<PP_Comment> Comments { get; set; }
    public DbSet<PP_Contact> Contacts { get; set; }
    public DbSet<PP_Department> Departments { get; set; }
    public DbSet<PP_Projects> Projects { get; set; }
    public DbSet<PP_MapCode> MapCodes { get; set; }
    public DbSet<PP_ProjectContacts> ProjectContacts { get; set; }
  }
}
