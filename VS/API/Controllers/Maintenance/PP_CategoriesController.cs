using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Tables;

namespace API.Controllers.Maintenance
{
    [Produces("application/json")]
    [Route("api/PP_Categories")]
    public class PP_CategoriesController : Controller
    {
        private readonly Context _context;

        public PP_CategoriesController(Context context)
        {
            _context = context;
        }

        // GET: api/PP_Categories
        [HttpGet]
        public IEnumerable<PP_Category> GetCategories()
        {
            return _context.Categories;
        }

        // GET: api/PP_Categories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPP_Category([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_Category = await _context.Categories.SingleOrDefaultAsync(m => m.CategoryID == id);

            if (pP_Category == null)
            {
                return NotFound();
            }

            return Ok(pP_Category);
        }

        // PUT: api/PP_Categories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPP_Category([FromRoute] Guid id, [FromBody] PP_Category pP_Category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pP_Category.CategoryID)
            {
                return BadRequest();
            }

            _context.Entry(pP_Category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PP_CategoryExists(id))
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

        // POST: api/PP_Categories
        [HttpPost]
        public async Task<IActionResult> PostPP_Category([FromBody] PP_Category pP_Category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Categories.Add(pP_Category);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPP_Category", new { id = pP_Category.CategoryID }, pP_Category);
        }

        // DELETE: api/PP_Categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePP_Category([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_Category = await _context.Categories.SingleOrDefaultAsync(m => m.CategoryID == id);
            if (pP_Category == null)
            {
                return NotFound();
            }

            _context.Categories.Remove(pP_Category);
            await _context.SaveChangesAsync();

            return Ok(pP_Category);
        }

        private bool PP_CategoryExists(Guid id)
        {
            return _context.Categories.Any(e => e.CategoryID == id);
        }
    }
}