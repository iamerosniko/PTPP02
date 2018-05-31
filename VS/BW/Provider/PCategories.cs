using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Provider
{
  [Produces("application/json")]
  public class PCategories : Controller
  {
    private string _bearer;
    private ApiServices _api;

    public PCategories(string bearer)
    {
      _bearer = bearer;
      _api = new ApiServices("Categories", bearer);

    }
    public async Task<IEnumerable<PP_Category>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_Category>>(await _api.Get());
    }

    public async Task<PP_Category> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_Category>(await _api.Get(ID));
    }

    public async Task<PP_Category> Post([FromBody]PP_Category value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Category>(await _api.Post(body));
    }

    public async Task<PP_Category> Put(string id, [FromBody]PP_Category value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Category>(await _api.Put(id, body));
    }

    public async Task<PP_Category> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_Category>(result) : null;
    }
  }
}
