using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Providers
{
  [Produces("application/json")]
  public class CategoriesController : Controller
  {
    private string _bearer;
    private ApiServices _api;

    public CategoriesController(string bearer)
    {
      _bearer = bearer;
      _api = new ApiServices("Categories", bearer);

    }
    [HttpGet]
    public async Task<IEnumerable<PP_Category>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_Category>>(await _api.Get());
    }

    [HttpGet("{id}")]
    public async Task<PP_Category> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_Category>(await _api.Get(ID));
    }

    [HttpPost]
    public async Task<PP_Category> Post([FromBody]PP_Category value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Category>(await _api.Post(body));
    }

    [HttpPut("{id}")]
    public async Task<PP_Category> Put(string id, [FromBody]PP_Category value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_Category>(await _api.Put(id, body));
    }

    [HttpDelete("{id}")]
    public async Task<PP_Category> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_Category>(result) : null;
    }
  }
}
