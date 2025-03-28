import useWorkoutsContext from "../hooks/useWorkoutsContext";

export default function WorkoutDetails({ workout }) {

  const { dispatch } = useWorkoutsContext();

  async function handleClick() {
    const URL = `http://localhost:4000/api/workouts/${workout._id}`;
    const resp = await fetch(URL, {
      method: 'DELETE',
    });
    const data = await resp.json();

    if(resp.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: data });
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}