using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Providers
{
  [Produces("application/json")]
  public class PCentricScores : Controller
  {
    private string _bearer;
    private ApiServices _api;

    public PCentricScores(string bearer)
    {
      _bearer = bearer;
      _api = new ApiServices("CentricScores", bearer);

    }
    [HttpGet]
    public async Task<IEnumerable<PP_CentricScore>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_CentricScore>>(await _api.Get());
    }

    [HttpGet("{id}")]
    public async Task<PP_CentricScore> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_CentricScore>(await _api.Get(ID));
    }

    [HttpPost]
    public async Task<PP_CentricScore> Post([FromBody]PP_CentricScore value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_CentricScore>(await _api.Post(body));
    }

    [HttpPut("{id}")]
    public async Task<PP_CentricScore> Put(string id, [FromBody]PP_CentricScore value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_CentricScore>(await _api.Put(id, body));
    }

    [HttpDelete("{id}")]
    public async Task<PP_CentricScore> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_CentricScore>(result) : null;
    }
  }
}
