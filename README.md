# REAL-TIME COLLABORATION TOOL

COMPANY NAME: CODDETECH IT SOLUTIONS

NAME: ABHISHEK MAURYA

INTERN ID: CT08NCA

DOMAIN: SOFTWARE DEVELOPMENT

DURATION: 1 MONTHS

MENTOR: NEELA SANTOSH

## DESCRIPTION
This project is a real-time collaborative note-taking tool that allows multiple users to edit a shared document simultaneously. It leverages WebSockets to enable instant communication between connected clients and maintains an up-to-date document state for all users. The system is built using Node.js, Express, WebSockets, and plain HTML, CSS, and JavaScript for the frontend.

### Key Features
1. Live Collaboration: Users can edit a text document in real-time, and all changes are instantly synchronized across connected clients.
2. WebSocket-based Communication: WebSockets ensure fast and efficient data transfer, keeping all clients in sync.
3. Server-side Data Storage: The document’s content is saved on the server using fs.writeFileSync, ensuring persistence.
4. Auto-save and Update Status: A delay-based mechanism prevents excessive updates and displays a "saving" or "saved" status.
5. Minimalistic and Responsive UI: A simple and clean interface for distraction-free note-taking.
   
### Project Breakdown
#### Backend - Node.js Server with WebSockets
The backend is built using Node.js and the Express framework. The HTTP server serves static frontend files and establishes a WebSocket connection for real-time communication. The server-side code does the following:

1. Initializes an Express app and creates an HTTP server.
2. Sets up a WebSocket server (wss), allowing clients to connect.
3. Maintains the document content in a global variable (documentData).
4. Listens for WebSocket messages from clients and updates documentData accordingly.
5. Broadcasts updates to all connected clients except the sender to avoid redundant messages.
6. Saves the document on the server using fs.writeFileSync(), ensuring persistence.

### Frontend - HTML, CSS, and JavaScript
The frontend provides a basic text editor inside a <textarea> element where users can write and edit text. WebSockets handle real-time synchronization between clients.

#### Core Functionalities
1. Establishes a WebSocket connection to the server.
2. Listens for incoming updates and modifies the <textarea> content accordingly.
3. Sends user updates only after a short delay (debouncing) to optimize performance.
4. Displays update timestamps and save status for user clarity.

#### CSS for Styling
The tool is styled with modern and minimal design principles for a clean look. The editor is centered, has proper padding, and uses a readable font.

### How the System Works
User Access: When a user loads the webpage, a WebSocket connection is established.
Initial Document Load: The server sends the current document state to the newly connected user.
Real-time Updates: Any changes made in the textarea are sent to the server, which updates documentData and broadcasts the changes to all connected clients.
Auto-save: Changes are periodically saved to document.txt, ensuring persistent storage.

### Future Enhancements
1. User Authentication – Add logins to track individual contributions.
2. Multi-document Support – Enable users to create and switch between multiple notes.
3. Rich Text Editor – Implement bold, italics, headings, and images for better note formatting.
4. Version Control – Maintain document history to revert changes if needed.
5. Cloud Storage – Store files in a database or cloud storage instead of a local file.

### Conclusion
This real-time collaborative note-taking tool is a lightweight and efficient way to work on shared documents. By leveraging WebSockets, it provides a seamless editing experience, ensuring that changes are instantly reflected across all users. The backend is simple yet effective, handling document updates and storage, while the frontend offers an intuitive and responsive interface.

This project serves as a foundation for more advanced collaborative applications, such as team-based document editing tools and real-time coding environments. 

## OUTPUT

![Image](https://github.com/user-attachments/assets/7cf30dfb-ca14-4cb2-81ab-93d5b4be3971)
