import express from 'express';
import { router } from './routes/userRoutes';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));

export default app;
