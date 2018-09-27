using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Threading.Tasks;

namespace API.Controllers.Transactional.Main
{
  [Produces("application/json")]
  [Route("api/PP_WorkDay")]
  public class PP_WorkDayController : Controller
  {
    // GET: api/PP_WorkDay
    [HttpGet]
    public async Task<string> Get()
    {
      string employee = "eros";
      string apiURL = @"https://employee-service.apps.cac.pcf.manulife.com:443/api/employee/firstNameLike/" + employee + "?limit=10";
      string finalResult = "";
      WebClient client = new WebClient();
      //client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue(""));
      try
      {
        Uri uri = new Uri(apiURL);
        var request = client.DownloadString(apiURL);
        //if (request.IsSuccessStatusCode)
        //{
        //  var result = await request.Content.ReadAsStringAsync();
        //  finalResult = result;
        //}
        finalResult = request;
      }
      catch (Exception ex)
      {
        return ex.ToString();
      }
      return finalResult;
    }

    // GET: api/PP_WorkDay/5
    [HttpGet("{id}", Name = "Get")]
    public string Get(int id)
    {
      return "value";
    }

    // POST: api/PP_WorkDay
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT: api/PP_WorkDay/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
