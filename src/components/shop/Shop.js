import React from 'react';
import FakeData from '../../fake data/Index';
import { useState } from 'react';
import Course from '../courses/Course';
import Cart from '../cart/Cart';

const Shop = () => {
    const specificData = FakeData.slice(0, 10);
    const [data, setData] = useState(specificData); 
    const [cart, setCart] = useState([]);
    const handleAddCourse = (bought) =>{
        const newCart = [...cart, bought];
        setCart(newCart);
    }

    return (
        <div>
            <div className="row ">
            <div className="col-sm-12 d-flex justify-content-end">
            <Cart cart={cart}></Cart>
            </div>
            </div>
            <h1 className='titleName'>Courses</h1>
            <div className="row ">
            {
            data.map(data => 
            <Course 
            handleAddCourse ={handleAddCourse}
            newData={data}>  
            </Course>)
            }
            </div>
        </div>
        
    );
};

export default Shop;