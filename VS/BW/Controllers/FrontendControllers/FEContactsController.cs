using API.Tables;
using BW.Provider;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Controllers.FrontendControllers
{
  [Produces("application/json")]
  [Route("api/FEContacts")]
  public class FEContactsController : Controller
  {
    Providers _providers;

    // GET: api/FEContacts
    [HttpGet]
    public async Task<IEnumerable<PP_Contact>> Get()
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.contacts.Get();
    }

    // GET: api/FEContacts/5
    [HttpGet("{id}")]
    public async Task<PP_Contact> Get(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.contacts.Get(id);
    }

    // POST: api/FEContacts
    [HttpPost]
    public async Task<PP_Contact> Post([FromBody]PP_Contact value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.contacts.Post(value);
    }

    // PUT: api/FEContacts/5
    [HttpPut("{id}")]
    public async Task<PP_Contact> Put(string id, [FromBody]PP_Contact value)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.contacts.Put(id, value);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task<PP_Contact> Delete(string id)
    {
      _providers = new Providers(HttpContext.Session.GetString("authorizationToken"));
      return await _providers.contacts.Delete(id);
    }
  }
}
