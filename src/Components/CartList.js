import React from 'react';
import { useSelector } from 'react-redux';
import Crad from './Crad';

const CartList = () => {
    const car = useSelector(state => state.carReducer.car)
    console.log(car);

    return (
        <div className='grid grid-cols-3'>
            {
                car.map(pro => <Crad key={pro._id} pro={pro}></Crad>)
            }
        </div>
    );
};

export default CartList;