import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// Middleware CORS
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Ruta del proxy para IGDB
app.post('/proxy/games', async (req, res) => {
  try {
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': 'jmjyenx30pvsbntriruwweho48yj63',
        'Authorization': 'Bearer 1ga54wqseendup0xmdegx50ucqxy09',
      },
      body: req.body.query || "fields name; limit 10;",
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error proxying the request');
  }
});

// Manejar la carpeta "build" en producción
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
}

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
