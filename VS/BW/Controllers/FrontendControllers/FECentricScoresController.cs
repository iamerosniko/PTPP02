using API.Tables;
using BW.Provider;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Controllers.FrontendControllers
{
  [Produces("application/json")]
  [Route("api/FECentricScores")]
  public class FECentricScoresController : Controller
  {
    Providers _providers;

    // GET: api/FECentricScores
    [HttpGet]
    public async Task<IEnumerable<PP_CentricScore>> Get()
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.centricScores.Get();
    }

    // GET: api/FECentricScores/5
    [HttpGet("{id}")]
    public async Task<PP_CentricScore> Get(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.centricScores.Get(id);
    }

    // POST: api/FECentricScores
    [HttpPost]
    public async Task<PP_CentricScore> Post([FromBody]PP_CentricScore value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.centricScores.Post(value);
    }

    // PUT: api/FECentricScores/5
    [HttpPut("{id}")]
    public async Task<PP_CentricScore> Put(string id, [FromBody]PP_CentricScore value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.centricScores.Put(id, value);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task<PP_CentricScore> Delete(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.centricScores.Delete(id);
    }
  }
}
