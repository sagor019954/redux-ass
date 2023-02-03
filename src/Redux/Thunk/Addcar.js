import { addData, loadData } from "../Action/Action";

const addSingleCarData = (car) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/addcar', {
            method: "POST",
            body: JSON.stringify(car),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data);
        if (data.data.acknowledged) {

            dispatch(addData({
                _id: data.data.insertedId,
                ...car
            }))
        }
    }
}
export default addSingleCarData