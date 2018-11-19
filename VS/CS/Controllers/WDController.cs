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
    // GET: api/WD
    [HttpGet]
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };
    }

    // GET: api/WD/5
    [HttpGet("{id}/{display}", Name = "Get")]
    public async Task<dynamic> Get([FromRoute]string id, [FromRoute]int display)
    {
      string apiURL = @"https://employee-lookup-service-prod.apps.cac.pcf.manulife.com/api/employee/firstNameLike/" + id + "?limit=" + display;
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

    // POST: api/WD
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT: api/WD/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
