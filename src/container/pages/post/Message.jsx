import React, { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';

const Chat = () => {
    const [connection, setConnection] = useState(null);
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(`${process.env.REACT_APP_HUBS_ENDPOINT}${'hub'}`,{
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
              })
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => console.log('Connection established'))
                .catch(err => console.log('Error connecting: ', err));

            connection.on('ReceiveMessage', (user, message) => {
                setChat([...chat, { user, message }]);
            });
        }
    }, [connection, chat]);

    const sendMessage = async () => {
        if (connection) {
            await connection.invoke('SendMessage', user, message);
            setMessage('');
        }
    };

    return (
        <div>
            <input type="text" placeholder="Enter your name" onChange={(e) => setUser(e.target.value)} />
            <br />
            <textarea rows="4" cols="50" placeholder="Type your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <br />
            <button type='button' onClick={sendMessage}>Send</button>

            <div>
                <ul>
                    {chat.map((msg, index) => (
                        <li key={index}>
                            <strong>{msg.user}:</strong> {msg.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Chat;
