import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Crad from '../Components/Crad';
import loadProductData from '../Redux/Thunk/Thunk';

const Home = () => {
    const product = useSelector(state => state.carReducer.allcar)
    console.log(product);
    // const [product, setProdut] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadProductData())
    }, [])
    // useEffect(() => {
    // fetch('http://localhost:5000/allcar', {
    //     method: 'GET',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify()
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         setProdut(data.data)
    //     })
    // }, [])
    return (

        <div>
            <div className='pt-10 pl-10'>
                <button className="btn btn-outline btn-primary">Parado</button>
                <button className="btn btn-outline btn-secondary">Honda</button>
            </div>
            <div className='grid grid-cols-3 m-10'>
                {
                    product.map(pro => <Crad key={pro._id} pro={pro}></Crad>)
                }
            </div>
        </div>

    );
};

export default Home;