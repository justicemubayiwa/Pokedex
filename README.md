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

