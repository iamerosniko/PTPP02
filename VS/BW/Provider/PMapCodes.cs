using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Provider
{
  [Produces("application/json")]
  public class PMapCodes : Controller
  {
    private string _bearer;
    private ApiServices _api;

    public PMapCodes(string bearer)
    {
      _bearer = bearer;
      _api = new ApiServices("MapCodes", bearer);

    }
    public async Task<IEnumerable<PP_MapCode>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_MapCode>>(await _api.Get());
    }

    public async Task<PP_MapCode> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_MapCode>(await _api.Get(ID));
    }

    public async Task<PP_MapCode> Post([FromBody]PP_MapCode value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_MapCode>(await _api.Post(body));
    }

    public async Task<PP_MapCode> Put(string id, [FromBody]PP_MapCode value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_MapCode>(await _api.Put(id, body));
    }

    public async Task<PP_MapCode> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_MapCode>(result) : null;
    }
  }
}
