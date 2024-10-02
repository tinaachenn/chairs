import express from 'express';
import dotenv from 'dotenv'
import chairsRouter from './routes/chairs.js';

const app = express();

// Serve static files
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/chairs', chairsRouter); // Use the chairs router for /chairs endpoint

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Chairs Chairs Chairs API</h1>');
});

// Start the server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
