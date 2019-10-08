# HyperionDev-Express-Level2-Task15
To run this project, do the following:
1. Fork repo https://github.com/correah2009/HyperionDev-React-Level2-Task15
2. Navigate to this directory from the command line interface.

For Part 1:
3. Install dependencies with
```
npm install
```

3. Run the node server by typing
```
npm start
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Task User Stories

Follow these steps:
● Create an application project folder called ‘my_first_express_app’.
● In this directory, create a subdirectory called ‘src’ that contains any css files you may use for this app.
● Create another subdirectory called ‘public’ that contains two static html files called ‘about.html’ and ‘contact_us.html’. Feel free to reuse any html files you have created before.
● Create a file called ‘person.json’ that describes a person. Save the file in ‘src’. E.g. of json: {“name”: “Tom Jones”, “email”: “​tom@gmail.com​”, “gender”: “male”}
● Create a server that will do the following:
○ Display “Welcome” and the name of the person that is read from the file ‘person.json’ at URL http://localhost:3000/.
○ Display the static HTML page, ‘about.html’ at URL http://localhost:3000/about​.html
○ Display the static HTML page, ‘contact_us.html’ at URL http://localhost:3000/​contact_us.html
○ Displays the message “Sorry! Can’t find that resource. Please check your URL” if the user enters an unknown path.
● Enable the server to restart on file changes.
● You should be able to start the server using n​pm start​.