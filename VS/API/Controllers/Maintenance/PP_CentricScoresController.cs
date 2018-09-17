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
    [Route("api/PP_CentricScores")]
    public class PP_CentricScoresController : Controller
    {
        private readonly Context _context;

        public PP_CentricScoresController(Context context)
        {
            _context = context;
        }

        // GET: api/PP_CentricScores
        [HttpGet]
        public IEnumerable<PP_CentricScore> GetCentricScores()
        {
            return _context.CentricScores;
        }

        // GET: api/PP_CentricScores/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPP_CentricScore([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_CentricScore = await _context.CentricScores.SingleOrDefaultAsync(m => m.CentricScoreID == id);

            if (pP_CentricScore == null)
            {
                return NotFound();
            }

            return Ok(pP_CentricScore);
        }

        // PUT: api/PP_CentricScores/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPP_CentricScore([FromRoute] Guid id, [FromBody] PP_CentricScore pP_CentricScore)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pP_CentricScore.CentricScoreID)
            {
                return BadRequest();
            }

            _context.Entry(pP_CentricScore).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PP_CentricScoreExists(id))
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

        // POST: api/PP_CentricScores
        [HttpPost]
        public async Task<IActionResult> PostPP_CentricScore([FromBody] PP_CentricScore pP_CentricScore)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CentricScores.Add(pP_CentricScore);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPP_CentricScore", new { id = pP_CentricScore.CentricScoreID }, pP_CentricScore);
        }

        // DELETE: api/PP_CentricScores/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePP_CentricScore([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pP_CentricScore = await _context.CentricScores.SingleOrDefaultAsync(m => m.CentricScoreID == id);
            if (pP_CentricScore == null)
            {
                return NotFound();
            }

            _context.CentricScores.Remove(pP_CentricScore);
            await _context.SaveChangesAsync();

            return Ok(pP_CentricScore);
        }

        private bool PP_CentricScoreExists(Guid id)
        {
            return _context.CentricScores.Any(e => e.CentricScoreID == id);
        }
    }
}