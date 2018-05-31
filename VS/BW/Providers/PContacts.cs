using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Providers
{
  [Produces("application/json")]
  public class PContacts : Controller
  {
    private string _bearer;
    private ApiServices _api;

    public PContacts(string bearer)
    {
      _bearer = bearer;
      _api = new ApiServices("Contacts", bearer);

    }
    [HttpGet]
    public async Task<IEnumerable<PP_Contact>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_Contact>>(await _api.Get());
    }

    [HttpGet("{id}")]
    public async Task<PP_Contact> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_Contact>(await _api.Get(ID));
    }

    [HttpPost]
    public async Task<PP_Contact> Post([FromBody]PP_Contact value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Contact>(await _api.Post(body));
    }

    [HttpPut("{id}")]
    public async Task<PP_Contact> Put(string id, [FromBody]PP_Contact value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Contact>(await _api.Put(id, body));
    }

    [HttpDelete("{id}")]
    public async Task<PP_Contact> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_Contact>(result) : null;
    }
  }
}
