using API.Tables;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers.Maintenance
{
  [EnableCors("CORS")]
  [Produces("application/json")]
  [Route("api/PP_Contacts")]
  public class PP_ContactsController : Controller
  {
    private readonly Context _context;

    public PP_ContactsController(Context context)
    {
      _context = context;
    }

    // GET: api/PP_Contacts
    [HttpGet]
    public IEnumerable<PP_Contact> GetContacts()
    {
      return _context.Contacts;
    }

    // GET: api/PP_Contacts/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPP_Contact([FromRoute] Guid id)
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

    // PUT: api/PP_Contacts/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPP_Contact([FromRoute] Guid id, [FromBody] PP_Contact pP_Contact)
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

      return NoContent();
    }

    // POST: api/PP_Contacts
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

    // DELETE: api/PP_Contacts/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePP_Contact([FromRoute] Guid id)
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

    private bool PP_ContactExists(Guid id)
    {
      return _context.Contacts.Any(e => e.ContactID == id);
    }
  }
}
