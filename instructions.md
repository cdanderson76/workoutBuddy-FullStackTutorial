CHALLENGE:

NOTE: YOU WILL HAVE TO GRAB THE MONGO URI AND PORT FROM THE TEXT FILE TO MAKE THIS WORK!!!!

1. Create a 'models' folder inside of the 'backend' directory, and create a file 
   called 'workoutSchema.js'.  Import Mongoose and create a schema.  The schema
   should be made up of the following:

   -title (string)
   -reps (number)
   -load (number)

    Also, all of these have to be required.  Ensure that this is exported when
    completed.

2. Import the schema into '/routes/workout.js'.  Create the route in which a user
   will create new workouts.  Use error code 200 for successful creations, and
   use error code 400 for UNSUCCESSFUL creations

3. Go into Postman, and type some JSON data to send to the database and ensure that 
   the data is sent.  Also, leave some fields out on purpose to see the error
   that SHOULD be returned in Postman.

4. Check MongoDB and ensure that it stored the data.


Solution:  https://shorturl.at/MTrBy
