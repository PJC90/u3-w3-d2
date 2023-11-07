export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'

export const addToFavAction = (data) => {
  return {
    type: ADD_TO_FAV,
    payload: data,
  }
}

export const removeFromFavAction = (i) => {
  return {
    type: REMOVE_FAV,
    payload: i,
  }
}
