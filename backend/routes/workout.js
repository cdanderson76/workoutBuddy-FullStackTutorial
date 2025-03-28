import express from 'express';
import { createWorkout,
         deleteWorkout,
         editWorkout, 
         getAllWorkouts, 
         getSingleWorkout} from '../controllers/workoutController.js';

const router = express.Router();

router.get('/', getAllWorkouts);
router.get('/:id', getSingleWorkout);
router.delete('/:id', deleteWorkout);
router.patch('/:id', editWorkout);
router.post('/', createWorkout); 

export default router;