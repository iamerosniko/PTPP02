using CS.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace CS.Controllers
{
  [Route("api/[controller]")]
  [EnableCors("CORS")]
  [ApiController]
  public class WDController : ControllerBase
  {

    // GET: api/WD/5
    [HttpGet("{id}/{display}")]
    public async Task<dynamic> Get([FromRoute]string id, [FromRoute]int display)
    {
      string apiURL = @"https://employee-lookup-service-prod.apps.cac.pcf.manulife.com/api/employee/fullNameLike/" + id + "?limit=" + display;
      string finalResult = "";
      HttpClient client = new HttpClient();
      try
      {
        var request = await client.GetAsync(apiURL);
        if (request.IsSuccessStatusCode)
        {
          var result = request.Content.ReadAsStringAsync().Result;

          finalResult = result;
        }
      }
      catch (Exception ex)
      {
        return ex.ToString();
      }
      var a = JsonConvert.DeserializeObject<EmployeeLookUp>(finalResult);

      return a;
    }

    [HttpGet("test/{id}/{display}")]
    public async Task<dynamic> Get2([FromRoute]string id, [FromRoute]int display)
    {
      string apiURL = @"https://employee-lookup-service-prod.apps.cac.pcf.manulife.com/api/employee/fullNameLike/" + id + "?limit=" + display;
      string finalResult = "";
      HttpClient client = new HttpClient();
      try
      {
        var request = await client.GetAsync(apiURL);
        if (request.IsSuccessStatusCode)
        {
          var result = request.Content.ReadAsStringAsync().Result;

          finalResult = result;
        }
      }
      catch (Exception ex)
      {
        return ex.ToString();
      }
      var a = JsonConvert.DeserializeObject<EmployeeLookUp>(finalResult);

      List<NGSelect2> ng2 = new List<NGSelect2>();

      foreach (var b in a.data)
      {
        ng2.Add(new NGSelect2 { id = b.emplid, text = b.full_name });
      }

      return ng2;
    }
  }
}
