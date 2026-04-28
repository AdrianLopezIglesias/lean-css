const express = require('express');
const path = require('path');
const app = express();

// Serve your CSS files from a 'css' directory
// This allows the HTML link tag href="/css/v1.css" to work
app.use('/css', express.static(path.join(__dirname, 'css')));

// Serve the HTML demo page (assuming you put index.html in a 'public' folder)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Demo running on http://localhost:3000'));