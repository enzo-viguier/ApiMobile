const express = require('express');
const app = express();

app.use(express.json()); // Middleware pour le JSON

// Définir un port
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Express on Vercel"));

// /hello/txt
app.get('/hello/txt', (req, res) => {
    res.send('Hello, World in plain text!');
});

// /hello/json
app.get('/hello/json', (req, res) => {
    res.json({ message: 'Hello, World in JSON!' });
});

// /light
app.get('/light', (req, res) => {
    res.json({ status: 'Light is ON' });
});

// /login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.json({ message: 'Login successful', token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// /led/on
app.get('/led/on', (req, res) => {
    res.json({ message: 'LED is turned ON' });
});

// /led/off
app.get('/led/off', (req, res) => {
    res.json({ message: 'LED is turned OFF' });
});

// /temperature
app.get('/temperature', (req, res) => {
    res.json({ temperature: 22.5, unit: 'C' });
});

// /temperature/c
app.get('/temperature/c', (req, res) => {
    res.json({ temperature: 22.5, unit: 'C' });
});

// /temperature/f
app.get('/temperature/f', (req, res) => {
    const tempC = 22.5; // Exemple de température en Celsius
    const tempF = (tempC * 9) / 5 + 32;
    res.json({ temperature: tempF, unit: 'F' });
});

// /play?song=mario
app.get('/play', (req, res) => {
    const song = req.query.song;
    if (song) {
        res.json({ message: `Playing song: ${song}` });
    } else {
        res.status(400).json({ message: 'No song specified' });
    }
});

// /led/rgb/set?red=100&green=100&blue=100
app.get('/led/rgb/set', (req, res) => {
    const { red, green, blue } = req.query;
    if (red && green && blue) {
        res.json({
            message: 'LED color set',
            red: parseInt(red),
            green: parseInt(green),
            blue: parseInt(blue),
        });
    } else {
        res.status(400).json({ message: 'Missing RGB values' });
    }
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
