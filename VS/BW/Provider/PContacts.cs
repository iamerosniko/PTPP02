using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Provider
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
    public async Task<IEnumerable<PP_Contact>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_Contact>>(await _api.Get());
    }

    public async Task<PP_Contact> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_Contact>(await _api.Get(ID));
    }

    public async Task<PP_Contact> Post([FromBody]PP_Contact value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Contact>(await _api.Post(body));
    }

    public async Task<PP_Contact> Put(string id, [FromBody]PP_Contact value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Contact>(await _api.Put(id, body));
    }

    public async Task<PP_Contact> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_Contact>(result) : null;
    }
  }
}
