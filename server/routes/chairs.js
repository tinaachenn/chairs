// this is the route for the chairs - this file takes the data from the chairs.js file and sends it to the server

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import chairData from '../data/chairs.js'; // Ensure this path is correct

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

// Endpoint to get all chairs
router.get('/', (req, res) => {
  console.log('Received request for all chairs');
  res.status(200).json(chairData);
});


// Endpoint to get a specific chair by ID
router.get('/:chairId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/chair.html'));
});

export default router;

  