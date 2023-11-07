export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const SAVE_RESULTS = 'SAVE_RESULTS'

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

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

export const searchForJobsActions = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        // data è l'array dei risultati
        // setJobs(data); non ci interessa perchè si settava sullo stato locale
        // qui dovremo dispatchare l'azione che sveglia il searchreducer
        dispatch({
          type: SAVE_RESULTS,
          payload: data,
        })
        //ogni volta che faccio un dispatch tutti i reducers si SVEGLIANO
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
