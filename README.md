CHALLENGE:

NOTE: YOU WILL HAVE TO GRAB THE MONGO URI AND PORT FROM THE TEXT FILE TO MAKE THIS WORK!!!!

1. Within the 'Home' component, create a 'useEffect' hook that will grab all of the
   workouts by way of an 'async' function using 'fetch'.  You do not want this to
   run on every rerender, so make the appropriate adjustments to the hook.

   Take the URL that you will fetch with, and place it in a variable.

3. Check the response to make sure that the response is ok, and if it is, add the 
   data to a state (we can call it 'Workouts').  In place of the 'h1' within the 
   'Home' component, replace it with a 'div' with the class of 'workouts'.  Also,
   Make sure that the parent div has a class of 'home'.

4. Now, map out the data that was pulled in IF there is data to be pulled in.  Make 
   sure that you use the 'key' prop, and use the ID that was used to create the
   workouts.  Use a 'p' tag to return the data, and ensure you use the 'title' name
   that we created in the schema we created during the backend portion of this
   project.

5. You should have the frontend server running already.  If not, start it.  However,
   nothing is going to happen until you start the backend server.  Go ahead and do so.

   In order to get the content rendered on the page, we'll have to use install 'CORS'.
   make the installation in the 'backend' directory, and then use it.  Ensure that you
   have the path to where your workouts sit, inside of that fetch function;

   NOTE: IF YOU DON'T HAVE ANYTHING IN THE DATABASE, CREATE A WORKOUT AND REFRESH 
         THE PAGE. 

  You should now see something close to what you see in Anki. 

   
   Solution: https://shorturl.at/FtV2v
