import { ADD_TO_CART } from "../ActionTypes/Actiontypes";

const carnumber = (store) => (next) => (action) => {
    const state = store.getState()
    const cart = state.carReducer.car

    if (action.type === ADD_TO_CART) {
        const newaction = {
            ...action,
            payload: { ...action.payload, cartPostion: cart.length }
        }
        return next(newaction)
    }
    return next(action)
}
export default carnumber