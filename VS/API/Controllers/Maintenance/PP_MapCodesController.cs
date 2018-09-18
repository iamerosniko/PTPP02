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
  [Route("api/PP_MapCodes")]
  public class PP_MapCodesController : Controller
  {
    private readonly Context _context;

    public PP_MapCodesController(Context context)
    {
      _context = context;
    }

    // GET: api/PP_MapCodes
    [HttpGet]
    public IEnumerable<PP_MapCode> GetMapCodes()
    {
      return _context.MapCodes;
    }

    // GET: api/PP_MapCodes/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPP_MapCode([FromRoute] Guid id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_MapCode = await _context.MapCodes.SingleOrDefaultAsync(m => m.MapCodeID == id);

      if (pP_MapCode == null)
      {
        return NotFound();
      }

      return Ok(pP_MapCode);
    }

    // PUT: api/PP_MapCodes/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPP_MapCode([FromRoute] Guid id, [FromBody] PP_MapCode pP_MapCode)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != pP_MapCode.MapCodeID)
      {
        return BadRequest();
      }

      _context.Entry(pP_MapCode).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!PP_MapCodeExists(id))
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

    // POST: api/PP_MapCodes
    [HttpPost]
    public async Task<IActionResult> PostPP_MapCode([FromBody] PP_MapCode pP_MapCode)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.MapCodes.Add(pP_MapCode);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetPP_MapCode", new { id = pP_MapCode.MapCodeID }, pP_MapCode);
    }

    // DELETE: api/PP_MapCodes/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePP_MapCode([FromRoute] Guid id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var pP_MapCode = await _context.MapCodes.SingleOrDefaultAsync(m => m.MapCodeID == id);
      if (pP_MapCode == null)
      {
        return NotFound();
      }

      _context.MapCodes.Remove(pP_MapCode);
      await _context.SaveChangesAsync();

      return Ok(pP_MapCode);
    }

    private bool PP_MapCodeExists(Guid id)
    {
      return _context.MapCodes.Any(e => e.MapCodeID == id);
    }
  }
}
