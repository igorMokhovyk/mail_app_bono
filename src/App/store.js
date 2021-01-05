import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../App/mailSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
  },
});
