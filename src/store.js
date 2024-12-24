// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

export default configureStore({ //Creates the Redux store, so all components in the application can access the state managed by the venueReducer
  reducer: {
    venue: venueReducer, //contains a reducer called venue
    av: avReducer,
    meals: mealsReducer,
  },
});
