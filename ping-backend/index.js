const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3002;

// Replace with the actual URL of your Route Backend
const ROUTE_BACKEND_URL = 'http://host.docker.internal:3001/route'; // For Docker on Mac/Windows
// For Linux, use the host's IP address, e.g., 'http://192.168.1.100:3001/route'

// Enable CORS for all routes and origins
app.use(cors());

app.use(express.json());

let counter = 0;

app.get('/ping', async (req, res) => {
    try {
        const dummyData = { message: 'Ping from Ping Backend', timestamp: new Date() };
        const response = await axios.post(ROUTE_BACKEND_URL, dummyData);
        console.log('Ping Backend received from Route Backend:', response.data);
        
        counter += 1;
        res.json({ number: counter });
    } catch (error) {
        console.error('Error in Ping Backend:', error.message);
        res.status(500).json({ error: 'Failed to ping Route Backend' });
    }
});

app.listen(port, () => {
    console.log(`Ping Backend listening at http://localhost:${port}`);
});
