import { loadData } from "../Action/Action";

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/allcar')
        const data = await res.json()
        console.log(data.data);
        dispatch(loadData(data.data))
    }
}
export default loadProductData