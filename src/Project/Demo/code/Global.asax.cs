using System.Web.Mvc;
using System.Web.Routing;
using Sitecore.Web;

namespace Hackathon.Boilerplate.Project.Demo
{
    public class MvcApplication : Application
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
