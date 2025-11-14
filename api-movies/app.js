import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importante
import moviesRoutes from './routes/movieRoutes.js';

const app = express();


app.use(cors());

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/apimovies')
    .then(() => console.log('✅ MongoDB Conectado!'))
    .catch((err) => console.error('❌ Erro ao conectar no MongoDB:', err));


app.use('/', moviesRoutes);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

export default app;