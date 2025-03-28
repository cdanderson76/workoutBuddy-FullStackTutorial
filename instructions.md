CHALLENGE:

NOTE: YOU WILL HAVE TO GRAB THE MONGO URI AND PORT FROM THE TEXT FILE TO MAKE THIS WORK!!!!

1. Create a component called 'WorkoutDetails.js' inside of the 'components' folder.  Import
   this component into the 'Home' component, and pass the 'key' and the entire 'workout'
   object as props into the 'WorkoutDetails' component.

   NOTE: THIS WILL BE IN PLACE OF WHAT'S CURRENTLY BEING RETURNED IN THE MAP METHOD WITHIN
   THE HOME COMPONENT!

3. The boilerplate for this component should be the following:

   ```
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
   ```

4. When done correctly, your browser should resemble the image in Anki.


Solution: https://shorturl.at/xgGkU
