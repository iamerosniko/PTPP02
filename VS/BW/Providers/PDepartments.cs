using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Providers
{
  [Produces("application/json")]
  public class PDepartments : Controller
  {
    private string _bearer;
    private ApiServices _api;

    public PDepartments(string bearer)
    {
      _bearer = bearer;
      _api = new ApiServices("Departments", bearer);

    }
    // GET: api/Departments
    [HttpGet]
    public async Task<IEnumerable<PP_Department>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_Department>>(await _api.Get());
    }

    // GET: api/Departments/5
    [HttpGet("{id}")]
    public async Task<PP_Department> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_Department>(await _api.Get(ID));
    }

    // POST: api/Departments
    [HttpPost]
    public async Task<PP_Department> Post([FromBody]PP_Department value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Department>(await _api.Post(body));
    }

    // PUT: api/Departments/5
    [HttpPut("{id}")]
    public async Task<PP_Department> Put(string id, [FromBody]PP_Department value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Department>(await _api.Put(id, body));
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public async Task<PP_Department> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_Department>(result) : null;
    }
  }
}
