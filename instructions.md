CHALLENGE:

NOTE: YOU WILL HAVE TO GRAB THE MONGO URI AND PORT FROM THE TEXT FILE TO MAKE THIS WORK!!!!

1. Create a folder called in the 'src' directory 'context' and create a file within it 
   called 'WorkoutContext.jsx'.  Create context in a variable called 'WorkoutsContext' 
   and provide and export for it.  Ensure that the 'Provider' is returned in this function.

2. Create a component called 'WorkoutsContextProvider', and have its tags rendered in a 
   return statement.  It is within these tags that we want to put whatever needs access
   to the context (in this case, it would be the 'App.jsx' component).  Import the
   'WorkoutsContextProvider' component into the 'main.jsx' component and wrap it around
   the 'App.jsx' component.  This will give the enitre app access to our 'WorkoutsContext'

3. Go back to 'WorkoutContext.jsx' and destructure the 'children' property inside of that
   component.  

4. Right now, our context isn't providing anything to the application, so we need to make
   that happen.  Import the 'useReducer' hook, and extract its 'state' and 'dispatch'.
   Pass it the arguments of 'workoutsReducer' and the object with the property/value of
   'workouts: null'.

5. Update the state by way of the 'useReducer' hook by describing the state change that you
   want to make.  Use 'SET_WORKOUT' (which gives a good description of the state change),
   then list the data that you need to make the change.

6. You've referenced this already, and now it's time to create the 'workoutsReducer' function
   Don't forget to use the previous state value and the action for this.  Set up a switch
   statement and based on the case, return the new value that you want each state to be.  Use
   the following cases (don't forget your 'default' case):

   SET_WORKOUTS (set all of the workouts)
   CREATE_WOrkout (create a new workout object)

7. Provide the 'state' and the 'dispatch' value within the 'WorkoutsContext.Provider' tag so
   that it will be available in other components.  Now create a folder called 'hooks' within
   the 'src' directory, and inside of it, create a file called 'useWorkoutsContext'.  Import
   the 'WorkoutsContext' and the 'useContext' hook.  Complete the code to make the hook function

8. In the 'WorkoutContext.Provider' tag in the 'WorkoutContext' file, spread out the state within
   its value.

   Now go into the 'Home' component and swap you the 'useState' hook for the 'useWorkoutContext'
   hook.  Don't forget to 'dispatch' the action rather than updating the state.
   
Now, instead of using LOCAL state, we should be using GLOBAL CONTEXT.  Whenever you add a workout
now, the page should automatically show that workout without having to refresh!

Solution: https://shorturl.at/FlXmp
