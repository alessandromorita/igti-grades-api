import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { gradeRouter } from './routes/gradeRouter.js';

import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Conectado');
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB');
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: db.cors,
  })
);
app.use(gradeRouter);

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.listen(db.port || 8081, () => {
  console.log('API Iniciada');
});
