import express from 'express';
import categoriesRoutes from './routes/categories.routes';
// import routes from './routes';
// import notFound from './middlewares/notFound';
// import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(categoriesRoutes);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// app.use('/api', routes);

// app.use(notFound);
// app.use(errorHandler);

export default app;
