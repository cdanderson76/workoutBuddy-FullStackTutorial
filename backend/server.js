import express from 'express';
import dotenv from 'dotenv';
import router from './routes/workout.js';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();

const app = express();
const workoutRoutes = router;

app.use(express.json());
app.use(cors());

app.use('/api/workouts', workoutRoutes);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});