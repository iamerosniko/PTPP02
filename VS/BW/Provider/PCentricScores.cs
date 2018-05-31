using API.Tables;
using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BW.Provider
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

    public async Task<IEnumerable<PP_CentricScore>> Get()
    {
      return JsonConvert.DeserializeObject<IEnumerable<PP_CentricScore>>(await _api.Get());
    }

    public async Task<PP_CentricScore> Get(string ID)
    {
      return JsonConvert.DeserializeObject<PP_CentricScore>(await _api.Get(ID));
    }

    public async Task<PP_CentricScore> Post([FromBody]PP_CentricScore value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_CentricScore>(await _api.Post(body));
    }

    public async Task<PP_CentricScore> Put(string id, [FromBody]PP_CentricScore value)
    {
      string body = JsonConvert.SerializeObject(value);
      return JsonConvert.DeserializeObject<PP_CentricScore>(await _api.Put(id, body));
    }

    public async Task<PP_CentricScore> Delete(string id)
    {
      var result = await _api.Delete(id);
      return result != null ? JsonConvert.DeserializeObject<PP_CentricScore>(result) : null;
    }
  }
}
