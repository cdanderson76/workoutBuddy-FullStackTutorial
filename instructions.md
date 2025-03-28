CHALLENGE:

NOTE: YOU WILL HAVE TO GRAB THE MONGO URI AND PORT FROM THE TEXT FILE TO MAKE THIS WORK!!!!

1. Back out of the 'backend' folder via the command line, and then create a folder
   called 'frontend'.  Move into the 'frontend' folder and create the Vite app.
   look up the documentation on specifics.

2. Get rid of 'App.css' and clear out 'index.css' in the 'src' directory.  Render
   something basic to the browser to ensure everything is working fine.

3. Ensure that you are in the 'frontend' folder and install 'react-router-dom'.
   Import this along with the following:

   BrowserRouter
   Routes
   Route

   Do this within the 'App.jsx' file.

4. Ensure that a parent 'div' is created in 'App.jsx' with a class of 'App'.  Inside of this
   use the 'BrowserRouter' component, and place a 'div' with the class of 'pages' on the 
   inside of it.

5. Create a directory called 'pages' within the 'src' directory, and then create the 
   'Home.jsx' component in the 'pages' directory.  Import the component into 'App.jsx' (you
   can use an 'h1' in the 'Home' component with the word of 'Home').

   Once you initiate Vite again, you should see the content in the home page from the
   component you just created.

6. Create a 'components' folder within the 'src' directory, and then create component called
   'Navbar'.  This should show up on every page with the title 'Workout Buddy'.  Here is the 
   boilerplate (hit edit to see the boilerplate code):

```
    <header>
      <div className='container'>
        <h1></h1>
      </div>
    </header>
```

7. Take the CSS for this project and paste it in 'index.css' (find this in your thumb drive).
   It should now look like the illustration in Anki.



Solution: https://shorturl.at/wfEdG
