import express from 'express';
import Workout from '../model/workoutSchema.js';

const router = express.Router();

router.get('/', (req, resp) => {
  resp.json({ message: 'GET all workouts' });
});

router.get('/:id', (req, resp) => {
  resp.json({ message: 'GET a single workout'});
});

router.delete('/:id', (req, resp) => {
  resp.json({ message: 'DELETE a single workout'});
});

router.patch('/:id', (req, resp) => {
  resp.json({ message: 'EDIT a single workout'});
});

router.post('/', async (req, resp) => {
  const {title, load, reps} = req.body;

  try {
    const workout = await Workout.create({title, load, reps});
    resp.status(200).json(workout);
  } catch(error) {
    resp.status(400).json({ error: error.message});
  }
}); 

export default router;