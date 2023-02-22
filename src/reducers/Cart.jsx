const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const initialState = JSON.parse(window.localStorage.getItem('cart')) || []
const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART': {
      const productIndex = state.findIndex((item) => item.id === payload.id)
      if (productIndex === -1) {
        const newProduct = [
          ...state,
          {
            ...payload,
            quantity: 1
          }
        ]
        updateLocalStorage(newProduct)
        return newProduct
      }
      const newProduct = [...state]
      newProduct[productIndex].quantity += 1
      updateLocalStorage(newProduct)
      return newProduct
    }
    case 'REMOVE_FROM_CART': {
      const newState = state.filter((item) => item.id !== payload.id)
      updateLocalStorage(newState)
      return newState
    }
    case 'SUBSTRACT_FROM_CART': {
      const productIndex = state.findIndex((item) => item.id === payload.id)
      const newProduct = [...state]
      if (newProduct[productIndex].quantity > 1) {
        newProduct[productIndex].quantity -= 1
        updateLocalStorage(newProduct)
        return newProduct
      }
      updateLocalStorage(state)
      return state
    }
    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }
    default: {
      updateLocalStorage(state)
      return state
    }
  }
}

export {
  initialState,
  reducer
}
