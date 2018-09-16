using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.SignalR.Transports;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(Byanco.Startup))]

namespace Byanco
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Any connection or hub wire up and configuration should go here
            app.MapSignalR();
        }
    }
}
