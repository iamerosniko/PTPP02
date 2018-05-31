using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Providers
{
  [Produces("application/json")]
  public class PCustomers : Controller
  {
    private string _bearer;
    private ApiServices _api;

    public PCustomers(string bearer)
    {
      _bearer = bearer;
      _api = new ApiServices("Customers", bearer);

    }
    [HttpGet]
    public async Task<IEnumerable<PP_MapCode>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_MapCode>>(await _api.Get());
    }

    [HttpGet("{id}")]
    public async Task<PP_MapCode> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_MapCode>(await _api.Get(ID));
    }

    [HttpPost]
    public async Task<PP_MapCode> Post([FromBody]PP_MapCode value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_MapCode>(await _api.Post(body));
    }

    [HttpPut("{id}")]
    public async Task<PP_MapCode> Put(string id, [FromBody]PP_MapCode value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_MapCode>(await _api.Put(id, body));
    }

    [HttpDelete("{id}")]
    public async Task<PP_MapCode> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_MapCode>(result) : null;
    }
  }
}
