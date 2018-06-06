using API.Tables;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
  [Produces("application/json")]
  [Route("api/Contacts")]
  public class ContactsController : Controller
  {
    private readonly Context _context;

    public ContactsController(Context context)
    {
      _context = context;
    }

    // GET: api/Contacts
    [HttpGet]
    public IEnumerable<PP_Contact> GetContacts()
    {
      return _context.Contacts;
    }

    // GET: api/Contacts/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPP_Contact([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_Contact = await _context.Contacts.SingleOrDefaultAsync(m => m.ContactID == id);

      if (pP_Contact == null)
      {
        return NotFound();
      }

      return Ok(pP_Contact);
    }

    // PUT: api/Contacts/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPP_Contact([FromRoute] int id, [FromBody] PP_Contact pP_Contact)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != pP_Contact.ContactID)
      {
        return BadRequest();
      }

      _context.Entry(pP_Contact).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PP_ContactExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return Ok(pP_Contact);

    }

    // POST: api/Contacts
    [HttpPost]
    public async Task<IActionResult> PostPP_Contact([FromBody] PP_Contact pP_Contact)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.Contacts.Add(pP_Contact);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetPP_Contact", new { id = pP_Contact.ContactID }, pP_Contact);
    }

    // DELETE: api/Contacts/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePP_Contact([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_Contact = await _context.Contacts.SingleOrDefaultAsync(m => m.ContactID == id);
      if (pP_Contact == null)
      {
        return NotFound();
      }

      _context.Contacts.Remove(pP_Contact);
      await _context.SaveChangesAsync();

      return Ok(pP_Contact);
    }

    private bool PP_ContactExists(int id)
    {
      return _context.Contacts.Any(e => e.ContactID == id);
    }
  }
}
