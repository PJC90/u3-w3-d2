import { SAVE_RESULTS } from '../actions'

const initialState = {
  // questo reducers lavorerà nel sotto oggetto chiamato "searchResult"

  content: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_RESULTS:
      return {
        ...state,
        content: action.payload,
      }

    default:
      return state
  }
}

export default searchReducer
