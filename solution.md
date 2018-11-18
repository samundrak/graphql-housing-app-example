#### Please copy file `.env.example` to `.env` before running app

# Improvements and Refactor

- Added library `react-loadable` for lazy loading of routes which were previously bundled in single file
- Added routes declaration under `<switch />` component
- Added a 404 route
- Added `styled-components` for more moduler css and component
- Changed `ApartmentAmentityView` component to functional component from `class` based component, as using `class` base components doesn't makes sense if we don't have local state or we depend on any life cycle hook. Also only passed `amenities` props because passing only required props will make component more testable and modular
