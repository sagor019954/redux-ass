import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeToCart } from '../Redux/Action/Action';
import deleteData from '../Redux/Thunk/deleteData';

const Crad = ({ pro }) => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    return (
        <div>
            <div className="card w-96 m-7 bg-base-100 shadow-xl">
                <figure><img className='w-full h-52' src={pro.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {pro.name}

                        {
                            pathname.includes('/home') && <button onClick={() => dispatch(deleteData(pro._id))} className="btn btn-outline btn-secondary">Delete</button>
                        }
                    </h2>
                    <p>{pro.quantityC}</p>
                    <p>{pro.about}</p>
                    <div className="card-actions justify-end">
                        {
                            pathname.includes('/home') && <button onClick={() => dispatch(addToCart(pro))} className="btn btn-outline btn-primary">Add To Cart</button>
                        }
                        {
                            pathname.includes('/cartlist') && <button onClick={() => dispatch(removeToCart(pro))} className="btn btn-active btn-secondary">Remove</button>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crad;