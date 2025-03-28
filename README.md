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
   then list the data that you need to make the change. (10:18)


Solution: https://shorturl.at/FlXmp
