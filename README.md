# Poetic Justice

An web app built for GSVLabs that is made to generate poems given a users input

## Description

This web app is built using Vue.js (Framework), Vuex (State management), Node (Backend), and Sqlite (Database)

## Methodology

Vue.js: I was going to build the app in React (fully experienced in), however I know GSVLabs uses Vue.js primarily at the moment thus I took some time to learn the ropes of the language. With more time, would have learned the transitions library to make the app a little more fluid and clean.

Vuex: Unfortunately (for me) I missunderstood the instructions intially which resulted in me thinking that I had to build out authentication server side to allow users to log in and create their own poems. After rereading the instructions I realized that wasnt neccessary. I had already built out the auth system so I ended up using vuex to manage the state of who is logged in. If you guys required it I would have used the state to then have the user be able to view only the poems the created.

Sqlite: Ended up going for Sqlite because while it isnt as fully featured as something like postgres; it is perfect for a small application like this where you guys will need to host it locally. Sqlite allows the server to generate its own table for an easier localhost situation


## Getting Started

### Dependencies

Buit in Mac OS X 10.14.6 using VScode v1.36.1
Testing using latest versions of Safari and Google Chrome
Node Package Manager v6.9.0


### Installing

Assuming you are using VScode open the project within a workspace.
Open the client and server directories in separate terminal windows
Run an npm install on both in order to catch all dependancies

### Executing program

Run an npm start for both client and server
```
host:client user$ npm start
```
Reset all tables (wipe the database)
  Navigate to app.js in the server folder
  Enter the parameter "force:true" in the sync method
  Reload the server
```
sequelize.sync({force: true})
```

## Help

I didnt get a chance to implement a cookie function to save state so by default if you refresh the page you will get a blank component wrapped by the toolbar. Just click "log in" or "poetic justice" to get back to the splash screen. You will have to relog in. 

If you arent seeing your newly submitted poem in the browse page, just cycle back to "Create Poem" and then back to "Browse" it should show up at the bottom. This happens because the call to the database isnt quick enough which means the state hasnt loaded just yet. The component takes a couple seconds to be up to date. 

## Authors

Udara Gunawardena

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
