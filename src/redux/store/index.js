import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favReducer from '../reducers/addFav'
import removeReducer from '../reducers/remFav'

const bigReducer = combineReducers({
  addFav: favReducer,
  remFav: removeReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
