CHALLENGE:

NOTE: YOU WILL HAVE TO GRAB THE MONGO URI AND PORT FROM THE TEXT FILE TO MAKE THIS WORK!!!!

1. Create a component called 'WorkoutForm.jsx' inside of the 'components' folder.  Now
   because the user is going to put in the title of the exercise, the reps and weight, we
   need to add state to keep track of this information.  So, set state for all of these
   things.

   In addition, set an 'error' state and initialize it with 'null'

2. Create the form using the boilerplate below:

   ```
   <form className="create">
      <h3></h3>
      <label></label>
      <input />

      <label></label>
      <input />

      <label></label>
      <input />
      <button></button>
    </form>
    ```
    the first input should be text;
    the second input should be numbers
    the third input should be numbers

3. Set up controlled inputs to control the state.

4. Use the must updated form submission to grab the information and submit it to our
   database.  Ensure that you set up error handling if the response doesn't turn out ok.

5. Import the 'WorkoutForm' component into the 'Home' component.  Place it in between the last
   two 'divs' of this component.  Ensure that the CSS is up to date as well.

   NOTE:  YOU SHOULD NOW BE ABLE TO TYPE INTO THE FORM AND ADD A WORKOUT!  HOWEVER, YOU 
          WILL HAVE TO REFRESH THE PAGE TO SEE THE LATEST WORKOUTS.  THIS WILL BE FIXED IN
          THE NEXT TUTORIAL


Solution: https://shorturl.at/fhCn8
