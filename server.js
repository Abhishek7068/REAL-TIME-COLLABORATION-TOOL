const WebSocket = require('ws'); // Import WebSocket module for real-time communication
const express = require('express'); // Import Express to create an HTTP server
const http = require('http'); // Import HTTP module to create the server
const path = require('path'); // Import path module to serve frontend files

const app = express(); // Initialize Express application
const server = http.createServer(app); // Create an HTTP server using Express
const wss = new WebSocket.Server({ server }); // Create a WebSocket server attached to the HTTP server
const fs = require("fs");

app.use(express.static(path.join(__dirname, 'public')));
const filePath = path.join(__dirname, 'public', 'document.txt');

if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
}
function saveToFile(content){
    fs.writeFileSync(filePath, content, 'utf-8');
}

let documentData = ""; // Variable to store the shared document content

wss.on('connection', (ws) => {
    // Send the current document state to the newly connected client
    ws.send(JSON.stringify({ type: 'init', content: documentData }));
    
    // Listen for messages from clients
    ws.on('message', (message) => {
        const data = JSON.parse(message); 
        if (data.type === 'update') { 
            documentData = data.content; 
            
            saveToFile(documentData);
            
            broadcast(documentData, ws); 
        }
    });
});

// Function to broadcast updates to all connected clients except the sender
function broadcast(content, sender) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) { 
            client.send(JSON.stringify({ type: 'update', content }));
        }
    });
}

// Start the HTTP server on port 8080
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

