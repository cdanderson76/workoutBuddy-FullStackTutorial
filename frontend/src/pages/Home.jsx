import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

export default function Home() {

  const [ workouts, setWorkouts ] = useState(null);
  const URL = 'http://localhost:4000/api/workouts';

  useEffect(() => {
    
    async function fetchWorkouts() {
      const resp = await fetch(URL);
      const data = await resp.json();
      
      if(resp.ok) {
        setWorkouts(data);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        { workouts && workouts.map((workout) => (<WorkoutDetails key={workout._id} workout={workout} />))}
      </div>
      <WorkoutForm />
    </div>
  )
}