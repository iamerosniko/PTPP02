using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Tables;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api/Comments")]
    public class CommentsController : Controller
    {
        private readonly Context _context;

        public CommentsController(Context context)
        {
            _context = context;
        }

        // GET: api/Comments
        [HttpGet]
        public IEnumerable<PP_Comment> GetComments()
        {
            return _context.Comments;
        }

        // GET: api/Comments/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPP_Comment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_Comment = await _context.Comments.SingleOrDefaultAsync(m => m.MainID == id);

            if (pP_Comment == null)
            {
                return NotFound();
            }

            return Ok(pP_Comment);
        }

        // PUT: api/Comments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPP_Comment([FromRoute] int id, [FromBody] PP_Comment pP_Comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pP_Comment.MainID)
            {
                return BadRequest();
            }

            _context.Entry(pP_Comment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PP_CommentExists(id))
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

        // POST: api/Comments
        [HttpPost]
        public async Task<IActionResult> PostPP_Comment([FromBody] PP_Comment pP_Comment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Comments.Add(pP_Comment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPP_Comment", new { id = pP_Comment.MainID }, pP_Comment);
        }

        // DELETE: api/Comments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePP_Comment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_Comment = await _context.Comments.SingleOrDefaultAsync(m => m.MainID == id);
            if (pP_Comment == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(pP_Comment);
            await _context.SaveChangesAsync();

            return Ok(pP_Comment);
        }

        private bool PP_CommentExists(int id)
        {
            return _context.Comments.Any(e => e.MainID == id);
        }
    }
}