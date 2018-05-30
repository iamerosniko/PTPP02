using BW.APIHelper;
using Microsoft.AspNetCore.Mvc;

namespace BW.Controllers.FrontendControllers
{
  [Produces("application/json")]
  [Route("api/Applications")]
  public class ApplicationsController : Controller
  {
    private ApiServices _api;

    //[HttpGet]
    //public async Task<List<Applications>> Get()
    //{
    //    _api = new ApiServices("applications", null);
    //    return JsonConvert.DeserializeObject<List<Applications>>(await _api.Get());
    //}   
  }
}
