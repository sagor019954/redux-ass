import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import addSingleCarData from '../Redux/Thunk/Addcar';

const Form = () => {

    const dispatch = useDispatch()

    const user = {
        "name": "panda",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcX6uFDj8w_emOpcMFXkxYa163403PBsZIepl9Ldyow&s",
        "about": "automobile, byname auto, also called motorcar or car, a usually four-wheeled vehicle designed primarily for passenger transportation and commonly propelled by an internal-combustion engine using a volatile fuel"
    }
    dispatch(addSingleCarData(user))
    return (
        <div>

            this is order section

        </div>
    );
};

export default Form;