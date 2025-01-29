const WebSocket = require('ws'); // Import WebSocket module for real-time communication
const express = require('express'); // Import Express to create an HTTP server
const http = require('http'); // Import HTTP module to create the server
const path = require('path'); // Import path module to serve frontend files

const app = express(); // Initialize Express application
const server = http.createServer(app); // Create an HTTP server using Express
const wss = new WebSocket.Server({ server }); // Create a WebSocket server attached to the HTTP server



const fs = require("fs");

function saveToFile(content){
    fs.writeFileSync('document.txt', content, 'utf-8');
}




let documentData = ""; // Variable to store the shared document content

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Listen for new WebSocket connections
wss.on('connection', (ws) => {
    // Send the current document state to the newly connected client
    ws.send(JSON.stringify({ type: 'init', content: documentData }));
    
    // Listen for messages from clients
    ws.on('message', (message) => {
        const data = JSON.parse(message); // Parse received message as JSON
        if (data.type === 'update') { // Check if message type is 'update'
            documentData = data.content; // Update document data with received content
            
            saveToFile(documentData);
            
            broadcast(documentData, ws); // Broadcast the update to other clients
        }
    });
});

// Function to broadcast updates to all connected clients except the sender
function broadcast(content, sender) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) { // Ensure the client is open
            client.send(JSON.stringify({ type: 'update', content })); // Send updated content to clients
        }
    });
}

// Start the HTTP server on port 8080
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

