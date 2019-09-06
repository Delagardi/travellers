This project was created with [Create React App](https://github.com/facebook/create-react-app).

Travelers.

To start the project:
1. Clone repository
2. At client directory do:
- npm install
- npm start
3. At server directory do the same:
- npm install
- at server/config/default.json in mongoURI config string change `<user>:<password>` fields. I had sent it with my email.
- npm run server 
If everything goes right you should see two messages at the server console: 
a) `Server started on port 5001`
b) `MongoDB connected...`

Project created with MERN stack (MongoDB, Express, React, Node). MongoDB connected through https://cloud.mongodb.com. Styles with [Material-UI](https://material-ui.com);

The project has ErrorBoundry with a user-friendly interface. If you want to test it, you can simply throw an error at some API response. For example, just add this code `throw new Error('This is error')` before the return at route GET api/travellers.