using API.Tables;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
  [Produces("application/json")]
  [Route("api/Main")]
  public class MainController : Controller
  {
    private readonly Context _context;

    public MainController(Context context)
    {
      _context = context;
    }

    // GET: api/Main
    [HttpGet]
    public IEnumerable<PP_Main> GetMain()
    {
      return _context.Main;
    }

    // GET: api/Main/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPP_Main([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_Main = await _context.Main.SingleOrDefaultAsync(m => m.MainID == id);

      if (pP_Main == null)
      {
        return NotFound();
      }

      return Ok(pP_Main);
    }

    // PUT: api/Main/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPP_Main([FromRoute] int id, [FromBody] PP_Main pP_Main)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != pP_Main.MainID)
      {
        return BadRequest();
      }

      _context.Entry(pP_Main).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PP_MainExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return Ok(pP_Main);

    }

    // POST: api/Main
    [HttpPost]
    public async Task<IActionResult> PostPP_Main([FromBody] PP_Main pP_Main)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.Main.Add(pP_Main);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetPP_Main", new { id = pP_Main.MainID }, pP_Main);
    }

    // DELETE: api/Main/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePP_Main([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_Main = await _context.Main.SingleOrDefaultAsync(m => m.MainID == id);
      if (pP_Main == null)
      {
        return NotFound();
      }

      _context.Main.Remove(pP_Main);
      await _context.SaveChangesAsync();

      return Ok(pP_Main);
    }

    private bool PP_MainExists(int id)
    {
      return _context.Main.Any(e => e.MainID == id);
    }
  }
}
