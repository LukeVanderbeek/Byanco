
class SignalRManager {    
    ConnectionId;

    constructor() {        
        this.ListenToHubs();
    }

    ListenToHubs() {
        //reference the auto-generated proxy for the hub.
        var progress = $.connection.progressHub;

        //create a function that the hub can call back to display messages.
        progress.client.addProgress = (messageType, message, percentage) => {
            this.Switchboard.Hub.publish(Topic.SignalRMessage, {
                type: messageType,
                message: message,
                percentage: percentage
            });
        };

        ($ as any).connection.hub.start().done(() => {
            this.ConnectionId = ($ as any).connection.hub.id;
        });
    }
}