namespace BW.Providers
{
  public class Providers
  {
    public PCustomers customers { get; set; }
    public PDepartments departments { get; set; }
    public PCategories categories { get; set; }
    public PCentricScores centricScores { get; set; }
    public PContacts contacts { get; set; }
    public Providers(string bearer)
    {
      customers = new PCustomers(bearer);
      departments = new PDepartments(bearer);
      categories = new PCategories(bearer);
      centricScores = new PCentricScores(bearer);
      contacts = new PContacts(bearer);
    }
  }
}
