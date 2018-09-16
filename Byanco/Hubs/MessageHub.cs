using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Byanco.Hubs;

namespace Byanco.Hubs
{
    public class MessageHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("Pulse", user, message);
        }

        //public static void SendProgress(string connectionId, string progressMessage, int progressCount, int totalItems)
        //{
        //    var hubContext = GlobalHost.ConnectionManager.GetHubContext<ProgressHub>();
        //    hubContext.Clients.Client(connectionId).AddProgress(SignalRMessageType.ImportProgress, progressMessage, ((progressCount * 100) / totalItems) + "%");
        //}

        //public static void SendImportResult(string connectionId, ExcelSheets sheets)
        //{
        //    var hubContext = GlobalHost.ConnectionManager.GetHubContext<ProgressHub>();
        //    hubContext.Clients.Client(connectionId).AddProgress(SignalRMessageType.ImportResult, JsonConvert.SerializeObject(sheets), "");
        //}
    }
}