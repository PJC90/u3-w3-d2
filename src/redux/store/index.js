import { combineReducers, configureStore } from '@reduxjs/toolkit'

import favouriteReducer from '../reducers/favourite'
import searchReducer from '../reducers/search'

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  search: searchReducer,
})

//sullo store c'è solo un posto reducer:
//ecco perchè si usa combineReducers
const store = configureStore({
  reducer: bigReducer,
})

export default store

// l'oggetto dello state sarà cosi:

// {
//   favourite:{
//     content:[]
//   },
//   search:{
//     content:[]
//   }
// }

//andiamo a ricreare questa struttura
