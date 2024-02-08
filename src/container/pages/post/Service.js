import * as signalR from '@microsoft/signalr';

const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_HUBS_ENDPOINT}${'hub'}`,{
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      }) // Replace with your API URL
    .build();

export const startConnection = async () => {
    try {
        await hubConnection.start();
    } catch (err) {
        console.error("Error while establishing SignalR connection:", err);
    }
};


export default hubConnection;
