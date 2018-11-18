# Homelike client for assignment

## Background information

### installation & run

1. start the server in the `../server` folder
1. start the client:
   - npm i
   - npm start

## What I did

1. Invest some time to refactor the current code and make it better
   - please also tell us what you did
1. Add webpack
   please check branch `add-webpack` where i tried to add webpack, got some error and stucked! will add soon
1. Add information about owner to apartment view page
1. Add new page "Locations", show the apartments filtered by location
1. Add new page "search page", provide abilities to search by location and filter by [size, price, amenities, details, services]

#### Please copy file `.env.example` to `.env` before running app

# Improvements and Refactor

- Added library `react-loadable` for lazy loading of routes which were previously bundled in single file
- Added routes declaration under `<switch />` component
- Added a 404 route
- Added `styled-components` for more moduler css and component
- Changed `ApartmentAmentityView` component to functional component from `class` based component, as using `class` base components doesn't makes sense if we don't have local state or we depend on any life cycle hook. Also only passed `amenities` props because passing only required props will make component more testable and modular
