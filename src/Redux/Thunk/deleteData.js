import { coolGray } from "tailwindcss/colors"
import { addDelete } from "../Action/Action"


const deleteData = (id) => {
    console.log(id)
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/car/${id}`, {
            method: "DELETE",
            body: JSON.stringify(),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
        if (data.data.acknowledged) {
            dispatch(addDelete(id))
        }
    }
}
export default deleteData