using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using System;

namespace CS
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.Configure<CookiePolicyOptions>(options =>
      {
        // This lambda determines whether user consent for non-essential cookies is needed for a given request.
        options.CheckConsentNeeded = context => true;
        options.MinimumSameSitePolicy = SameSiteMode.None;
      });

      services.AddMvc()
     .AddJsonOptions(o =>
     {
       try
       {
         if (o.SerializerSettings.ContractResolver != null)
         {
           var castedResolver = o.SerializerSettings.ContractResolver
                         as DefaultContractResolver;
           castedResolver.NamingStrategy = null;
         }
       }
       catch
       {

       }
     });
      services.AddCors(options =>
      {
        options.AddPolicy("CORS",
        corsPolicyBuilder => corsPolicyBuilder.AllowAnyOrigin()
        // Apply CORS policy for any type of origin
        .AllowAnyMethod()
        // Apply CORS policy for any type of http methods
        .SetPreflightMaxAge(new TimeSpan(0, 0, 0, 0, 0))
        .AllowAnyHeader()
          // Apply CORS policy for any headers
          .AllowCredentials());
        // Apply CORS policy for all users
      });

      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Home/Error");
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseStaticFiles();
      app.UseCookiePolicy();
      app.UseCors("CORS");

      app.UseMvc(routes =>
      {
        routes.MapRoute(
                  name: "default",
                  template: "{controller=Home}/{action=Index}/{id?}");
      });
    }
  }
}
