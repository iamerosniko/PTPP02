using API.Tables;
using BW.Provider;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Controllers.FrontendControllers
{
  [Produces("application/json")]
  [Route("api/FECategories")]
  public class FECategoriesController : Controller
  {
    // GET: api/FECategories
    Providers _providers;
    [HttpGet]
    public async Task<IEnumerable<PP_Category>> Get()
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.categories.Get();
    }

    // GET: api/FECategories/5
    [HttpGet("{id}")]
    public async Task<PP_Category> Get(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.categories.Get(id);
    }

    // POST: api/FECategories
    [HttpPost]
    public async Task<PP_Category> Post([FromBody]PP_Category value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.categories.Post(value);
    }

    // PUT: api/FECategories/5
    [HttpPut("{id}")]
    public async Task<PP_Category> Put(string id, [FromBody]PP_Category value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.categories.Put(id, value);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task<PP_Category> Delete(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.categories.Delete(id);
    }
  }
}
