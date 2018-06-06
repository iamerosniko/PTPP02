using API.Tables;
using BW.Provider;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Controllers.FrontendControllers
{
  [Produces("application/json")]
  [Route("api/FEDepartments")]
  public class FEDepartmentsController : Controller
  {
    Providers _providers;

    // GET: api/FEDepartments
    [HttpGet]
    public async Task<IEnumerable<PP_Department>> Get()
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.departments.Get();
    }

    // GET: api/FEDepartments/5
    [HttpGet("{id}")]
    public async Task<PP_Department> Get(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.departments.Get(id);
    }

    // POST: api/FEDepartments
    [HttpPost]
    public async Task<PP_Department> Post([FromBody]PP_Department value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.departments.Post(value);
    }

    // PUT: api/FEDepartments/5
    [HttpPut("{id}")]
    public async Task<PP_Department> Put(string id, [FromBody]PP_Department value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.departments.Put(id, value);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task<PP_Department> Delete(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.departments.Delete(id);
    }
  }
}
