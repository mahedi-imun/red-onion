import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Breakfast.css'
const Breakfast = ({ breakfast }) => {
    const { img, name, description, price ,id} = breakfast
    const navigate = useNavigate()
   
    return (
        <div onClick={()=>navigate(`/details/${id}`)} 
        className=' food-card col-12' 
        style={{ width: "300px ", height: "350px" }}>
            <div className='d-flex flex-column align-items-center justify-content-center p-2'>
                <img className='w-75 mb-2' src={img} alt="breakfast" />
                <h4 className='fs-6'>{name.slice(0,20)}</h4>
                <p className='text-center'>{description.slice(0,60)}</p>
                <h5>$ {price}</h5>
            </div>
        </div>
    );
};

export default Breakfast;