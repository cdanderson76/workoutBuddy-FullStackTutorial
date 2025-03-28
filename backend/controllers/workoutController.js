import Workout from "../model/workoutSchema.js";
import mongoose from "mongoose";

export async function createWorkout(req, resp) {
    const {title, load, reps} = req.body;
  
    try {
      const workout = await Workout.create({title, load, reps});
      resp.status(200).json(workout);
    } catch(error) {
      resp.status(400).json({ error: error.message });
    }
}


export async function editWorkout(req, resp) {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      return resp.status(404).json({ error: 'No such workout' })
    }
  
    const workout = await Workout.findOneAndUpdate({_id: id}, {
      ...req.body
    });

    if(!workout) {
      return resp.status(404).json('No such workout');
    }
  
    resp.status(200).json(workout);
};


export async function deleteWorkout(req, resp) {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return resp.status(404).json({ error: 'No such workout' })
  }

  const workout = await Workout.findOneAndDelete(id);
  if(!workout) {
    return resp.status(404).json('No such workout');
  }

  resp.status(200).json(workout);
};


export async function getSingleWorkout(req, resp) {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid({id})) {
    return resp.status(404).json({ error: 'No such workout'})
  }

  const workout = await Workout.findById({_id: id});

  if(!workout) {
    return resp.status(404).json({error: 'No such workout'});
  }

  resp.status(200).json(workout);
};


export async function getAllWorkouts(req, resp) {
  const workouts = await Workout.find({}).sort({ createdAt: -1});
  resp.status(200).json(workouts);
};