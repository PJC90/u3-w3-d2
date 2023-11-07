import { ADD_TO_FAV, REMOVE_FAV } from '../actions'

const initialState = {
  // questo reducers lavorerà nel sotto oggetto chiamato "favourites"

  content: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    case REMOVE_FAV:
      return {
        ...state,
        content: state.content.filter((book, i) => i !== action.payload),
      }

    default:
      return state
  }
}

export default favouriteReducer
