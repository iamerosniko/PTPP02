using API.Tables;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using System;

namespace API
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; private set; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc().AddControllersAsServices();
      services.AddMvc()
            .AddJsonOptions(o =>
            {
              if (o.SerializerSettings.ContractResolver != null)
              {
                var castedResolver = o.SerializerSettings.ContractResolver
                            as DefaultContractResolver;
                castedResolver.NamingStrategy = null;
              }
            });

      var connectionString = Configuration["ConnectionStrings:DefaultConnection"];

      services.AddDbContext<Context>(cfg =>
      {
        cfg.UseSqlServer(connectionString);
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
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      try
      {
        using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>()
        .CreateScope())
        {
          serviceScope.ServiceProvider.GetService<Context>().Database.Migrate();
        }
      }
      catch (Exception ex)
      {

        System.Diagnostics.Debug.WriteLine(ex, "Failed to migrate or seed database");
      }

      app.UseCors("CORS");

      app.UseMvc();
    }
  }
}
