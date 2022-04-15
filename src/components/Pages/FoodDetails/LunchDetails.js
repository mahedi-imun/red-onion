import { FaCartArrowDown, FaPlus, FaMinus } from 'react-icons/fa';
import React from 'react';
import { useParams } from 'react-router-dom';
import lunch1 from '../../../images/lunch/lunch1.png'
import lunch2 from '../../../images/lunch/lunch2.png'
import lunch3 from '../../../images/lunch/lunch3.png'
import lunch4 from '../../../images/lunch/lunch4.png'
import lunch5 from '../../../images/lunch/lunch5.png'
import lunch6 from '../../../images/lunch/lunch6.png'
import './FoodDeatils.css'
const lunches = [
    {
        name: 'Beef steak',
        description: "A beefsteak, often called just steak, is a flat cut of beef with parallel faces, usually cut perpendicular to the muscle fibers",
        price: 16.99,
        img: lunch1,
        id: 7

    },
    {
        name: 'Honey-soy-Glazed',
        description: "ix together the soy sauce, honey, sesame oil, green onions, and garlic. Add the chicken and marinate for 30 minutes or more. Marinate overnight ..",
        price: 9.99,
        img: lunch2,
        id: 8
    },
    {
        name: 'tarragon-rubbed-salmon',
        description: "Put the lemon zest and juice, garlic, tarragon and olive oil in a shallow, non-metallic dish and stir together. Season with salt and pepper, ...",
        price: 6.99,
        img: lunch3,
        id: 9
    },
    {
        name: 'Indian lunch',
        description: "lunch recipes, lunch ideas, south indian & north indian lunch recipes with step by step photo/video. inludes, pulav recipes, thali recipes, paneer recipes.",
        price: 8.99,
        img: lunch4,
        id: 10
    },
    {
        name: 'Fried-chicken-bento',
        description: "Dip chicken strips into egg, then roll in bread crumb mixture. Fry half of the chicken in hot oil about 2 minutes or until golden brown outside and no .",
        price: 9.99,
        img: lunch5,
        id: 11
    },
    {
        name: 'Healthy-meal-plan',
        description: "Our recipes are loaded with nutrients, fiber, and protein. They're designed to help you feel nourished and satiated. We believe that this is the real secret to !",
        price: 129.99,
        img: lunch6,
        id: 12
    }
];
const LunchDetails = () => {
    const id = useParams()
    
    const lunch = lunches.map(lunch => lunch);
    const lunchDetails = lunch.filter(food => food.id == id.id)
    let { name, img, description, price} = lunchDetails[0];
    

    return (
        <div className='container d-md-flex  w-75 mt-3 '>
            <div className=' details-info w-50 d-flex justify-content-center align-items-start flex-column '>
                <h3>{name}</h3>
                <p className='lh-lg'>{description}</p>
                <div className='mb-4 '>
                    <h4 className='d-inline me-3'>price: ${price}</h4>
                    <div className=' d-inline border py-2  px-3 rounded-pill '>
                        <button className='border-0 px-3 btn fs-6'><span><FaPlus /></span></button>
                        <span>1</span>
                        <button className='border-0 px-3 btn  fs-6'><span ><FaMinus /></span></button>
                    </div>
                </div>
                <div className=''>
                    <button style={{ backgroundColor: "#F92C54" }} className='border-0 rounded-pill py-2 px-3 text-white '><span className='mx-1'><FaCartArrowDown /></span> Add</button>
                </div>
            </div>
            <div className='details-img w-50 d-flex justify-content-center align-items-center'>
                <img style={{ width: "90%" }} src={img} alt="" />
            </div>
        </div>
    );
};

export default LunchDetails;