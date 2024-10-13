const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors middleware
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/route', (req, res) => {
    const receivedData = req.body;
    console.log('Route Backend received:', receivedData);
    res.json(receivedData);
});

app.listen(port, () => {
    console.log(`Route Backend listening at http://localhost:${port}`);
});
