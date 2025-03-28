import { useEffect, useState } from "react";

export default function Home() {

  const [ workouts, setWorkouts ] = useState(null);

  useEffect(() => {
    
    async function fetchWorkouts() {
      const resp = await fetch('http://localhost:4000/api/workouts');
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
        { workouts && workouts.map((workout) => (<p key={workout._id}>{workout.title}</p>))}
      </div>
    </div>
  )
}