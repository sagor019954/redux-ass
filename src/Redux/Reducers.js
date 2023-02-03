import { coolGray } from "tailwindcss/colors"
import { ADD_CAR, ADD_TO_CART, DELETE, LOAD_DATA, REMOVE_TO_CART } from "./ActionTypes/Actiontypes"

const initialState = {
    car: [],
    allcar: []
}

export const carAddToCartReducer = (state = initialState, action) => {
    console.log(state);
    const selectedProduct = state.car.find(selectedcar => selectedcar._id === action.payload._id)
    console.log(selectedProduct);
    switch (action.type) {


        case LOAD_DATA:
            return {
                ...state,
                allcar: action.payload
            }

        case ADD_CAR:
            return {
                ...state,
                allcar: [...state.allcar,]
            }
        case DELETE:
            return {
                ...state,
                allcar: state.allcar.filter(cars => cars.id !== action.payload),
            }
        case ADD_TO_CART:
            if (selectedProduct) {
                selectedProduct.quantity = selectedProduct.quantity + 1
                console.log(selectedProduct)
                const newSelectedCar = state.car.filter(c => c._id !== action.payload._id)
                return {
                    ...state,
                    car: [...newSelectedCar, selectedProduct]
                }
            }
            return {
                ...state,
                car: [...state.car, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_TO_CART:
            if (selectedProduct.quantity > 1) {
                const newCar = state.car.filter(
                    (product) => product._id !== action.payload._id
                );
                selectedProduct.quantity = selectedProduct.quantity - 1;

                return {
                    ...state,
                    car: [...newCar, selectedProduct],
                };
            }
            return {
                ...state,
                car: state.car.filter(car => car._id !== action.payload._id)
            }
        default:
            return state
    }
}