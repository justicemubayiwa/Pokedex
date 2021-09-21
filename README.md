# Simple PokeDex Application (MVP)

## Core Takeaways

To better understand state management and caching
To better understand how an application can make requests to a RESTful API

## Functional Requirements
- As a user, I want to view a list of Pokemon.
- As a user, I want to be able to select a Pokemon from a list and view information about it, such as its name, height, weight, picture, its types as well as its ability names

## Non Functional Requirements
- The application should be requesting all pokemon data, i.e. there shouldn’t be any hard coded Pokemon information in the application

## Bonus Requirements
- Styling (aesthetically pleasing)
- Sorting Pokemon by name, height, weight, etc.
- This application is hosted, for example on GitHub pages
In other words it would be nice if I could use the app from “justice-pokedex.github.io” for example
- The application is designed with accessibility in mind
  - Proper use of HTML tags, content descriptions, keyboard navigation
- There is routing, i.e. if I select a pokemon, the routing changes accordingly
  - E.g. clicking Bulbasaur changes the route from “localhost:3001” -> “localhost:3001/bulbasaur”
  - If I enter a particular route like “localhost:3001/bulbasaur”, this should be the selected pokemon

## Code/Design Considerations
- Code should be easy to read and maintain
- Folder structure should be organized
- The application / component list should be easily extensible should I ask for more features

## Other
- You must use the PokeAPI
- You must use source code management tools such as Git, GitHub, Bitbucket etc.
  - You are expected to commit chunks of work + have reasonable commit messages
- Vanilla JS or any framework such as React is permitted
- You are allowed to use UI component libraries such as Material UI or libraries like Bootstrap, etc.
- You are allowed to use any state management / caching solution of your choice
   - I.e. useState + useContext, Redux, etc.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


