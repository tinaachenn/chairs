import express from 'express';
import chairsRouter from './routes/chairs.js'; // Ensure this path is correct

const app = express();

// Serve static files
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

// Use the chairs router for /chairs endpoint
app.use('/chairs', chairsRouter); 

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Chairs Chairs Chairs API</h1>');
});

// Start the server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
