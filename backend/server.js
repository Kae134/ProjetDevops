import express from 'express';
import dotenv from 'dotenv';
import taskListRoute from './routes/taskListRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message: 'API is running',
    TaskList: `http://localhost:${port}/api/v1/tasklist`,
  });
});

app.use('/api/v1/tasklist', taskListRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
