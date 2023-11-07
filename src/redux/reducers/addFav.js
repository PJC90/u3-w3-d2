import { ADD_TO_FAV } from '../actions'

const initialState = {
  // divido il Redux Store in compartimenti, in modo da tenerlo ordinato e potenzialmente avere una struttura
  // capace di crescere in futuro, se deciderò di ampliare le funzionalità dall'app

  content: [], // l'effettivo array contenente i libri aggiunti al carrello
}

const favReducer = (
  state = initialState, // lo stato attuale, con un valore di default per inizializzarlo con dei valori prefissati
  action // l'ultima azione "dispatchata"
) => {
  // ora descriviamo la logica di funzionamento del reducer
  // dobbiamo dichiarare COME il reducer calcolerà il nuovo stato dell'app!
  switch (action.type) {
    case ADD_TO_FAV:
      // in OGNI case dobbiamo tornare il NUOVO stato dell'applicativo! dobbiamo tornare un oggetto!
      // state.cart.content.push // ESPLOSIONI! perchè? perchè abbiamo modificato state...
      return {
        ...state, // mi porto dentro il NUOVO stato tutto il contenuto del vecchio

        content: [...state.content, action.payload],
      }

    // case REMOVE_FAV:
    //   // in OGNI case dobbiamo tornare il NUOVO stato dell'applicativo! dobbiamo tornare un oggetto!
    //   return {
    //     ...state,
    //     cart: {
    //       ...state.cart,
    //       content: state.cart.content.filter((book, i) => i !== action.payload),
    //     },
    //   }

    default:
      return state
  }
}

export default favReducer
