
import { ADD_CAR, ADD_TO_CART, DELETE, LOAD_DATA, REMOVE_TO_CART } from "../ActionTypes/Actiontypes"

export const addToCart = (car) => {

    return {
        type: ADD_TO_CART,
        payload: car
    }
}
export const addDelete = (_id) => {

    return {
        type: DELETE,
        payload: _id
    }
}
export const removeToCart = (car) => {

    return {
        type: REMOVE_TO_CART,
        payload: car
    }
}
export const loadData = (data) => {
    return {
        type: LOAD_DATA,
        payload: data
    }
}
export const addData = (data) => {
    console.log(data);
    return {
        type: ADD_CAR,
        payload: data
    }
}