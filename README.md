# Real-Time Chat App

Welcome to the Real-Time Chat App! This application allows users to engage in real-time conversations with each other. It is built using Node.js as the back-end and HTML/CSS/JavaScript as the front-end. The communication between clients and the server is facilitated by Socket.IO, an event-driven library that establishes a real-time bi-directional communication channel.

## Features

- **Real-Time Communication**: The Real-Time Chat App enables users to engage in real-time conversations with other users. As soon as a message is sent by one user, it is instantly received and displayed by the recipient, creating a seamless chat experience.

- **Persons Online**: The application includes a "Persons Online" feature that allows users to see who is currently active. This feature provides visibility into which users are currently available for chat, enhancing the interactive nature of the app.

## Technologies Used

The Real-Time Chat App is built using the following technologies:

- **Node.js**: Node.js is a JavaScript runtime that allows running JavaScript on the server-side. In this application, Node.js is used as the back-end environment to handle client-server communication.

- **Socket.IO**: Socket.IO is a JavaScript library that enables real-time, bidirectional communication between clients and the server. It is utilized in the Real-Time Chat App to establish a communication channel and handle events such as user connection, disconnection, and message sending.

- **HTML, CSS, JavaScript**: The front-end of the Real-Time Chat App is built using these standard web technologies to create an interactive and user-friendly interface. HTML is used for the structure, CSS for styling, and JavaScript for client-side functionality.

## Getting Started

To use the Real-Time Chat App, follow these steps:

1. **Clone the Repository**: Clone the repository containing the Real-Time Chat App source code to your local machine.

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies by running the command `npm install`.

3. **Run the Application**: Start the application by running the command `npm start`. This will launch the Node.js server and make the application accessible on a local port.

4. **Access the App**: Open a web browser and navigate to `http://localhost:<port>`, where `<port>` is the port number specified in the server configuration. You should now see the Real-Time Chat App interface.

5. **Start Chatting**: Enter your desired username and start chatting with other users. Messages will be sent and received in real-time, creating a dynamic chat experience.

## Usage

- **User Connection**: When a user connects to the Real-Time Chat App, Socket.IO detects the connection event and establishes a connection between the client and the server.

- **User Disconnection**: If a user disconnects from the app, Socket.IO detects the disconnection event and updates the user's online status accordingly. The "Persons Online" feature reflects the active user count in real-time.

- **Sending Messages**: Users can send messages to other connected users by entering their text in the chat input field and pressing the send button. The messages are instantly sent to the server via Socket.IO and then broadcasted to the relevant recipients.

## Contributing

Contributions to the Real-Time Chat App are welcome! If you have any suggestions, bug reports, or feature requests, please submit them as issues on the GitHub repository. You can also fork the repository, make your changes, and submit a pull request for review.

Thank you for using the Real-Time Chat App.Be with your favourites, Happy chatting!
