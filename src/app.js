const express = require('express');

const app = express();

const webhookRoutes = require('./routes/webhookRoutes');

app.use(express.json());

app.use('/webhook', webhookRoutes);

app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});