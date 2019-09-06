const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/travellers', require('./routes/api/travellers'));

const PORT = 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));