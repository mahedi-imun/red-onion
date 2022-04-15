import React from 'react';
import lunch1 from '../../../../../images/lunch/lunch1.png'
import lunch2 from '../../../../../images/lunch/lunch2.png'
import lunch3 from '../../../../../images/lunch/lunch3.png'
import lunch4 from '../../../../../images/lunch/lunch4.png'
import lunch5 from '../../../../../images/lunch/lunch5.png'
import lunch6 from '../../../../../images/lunch/lunch6.png'
import Lunch from './Lunch';
const Lunches = () => {
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
    ]
    return (
        <div className='container text-center'>
            <div className='row gap-4 align-item-center  justify-content-md-between'>
                
                    {
                        lunches.map(lunch => <Lunch
                            key={lunch.id}
                            lunch={lunch}
                        ></Lunch>)
                    }

                

            </div>
        </div>
    );
};

export default Lunches;