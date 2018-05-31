using API.Tables;
using BW.Provider;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Controllers.FrontendControllers
{
  [Produces("application/json")]
  [Route("api/FEMapCodes")]
  public class FEMapCodesController : Controller
  {
    Providers _providers;

    // GET: api/FEMapCodes
    [HttpGet]
    public async Task<IEnumerable<PP_Category>> Get()
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.categories.Get();
    }

    // GET: api/FEMapCodes/5
    [HttpGet("{id}")]
    public async Task<PP_MapCode> Get(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.mapcodes.Get(id);
    }

    // POST: api/FEMapCodes
    [HttpPost]
    public async Task<PP_MapCode> Post([FromBody]PP_MapCode value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.mapcodes.Post(value);
    }

    // PUT: api/FEMapCodes/5
    [HttpPut("{id}")]
    public async Task<PP_MapCode> Put(string id, [FromBody]PP_MapCode value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.mapcodes.Put(id, value);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task<PP_MapCode> Delete(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.mapcodes.Delete(id);
    }
  }
}
