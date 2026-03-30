import express from 'express';
// import routes from './routes';
// import notFound from './middlewares/notFound';
// import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// app.use('/api', routes);

// app.use(notFound);
// app.use(errorHandler);

export default app;
