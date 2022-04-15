import React from 'react';
import dinner1 from '../../../../../images/dinner/dinner1.png'
import dinner2 from '../../../../../images/dinner/dinner2.png'
import dinner3 from '../../../../../images/dinner/dinner3.png'
import dinner4 from '../../../../../images/dinner/dinner4.png'
import dinner5 from '../../../../../images/dinner/dinner5.png'
import dinner6 from '../../../../../images/dinner/dinner6.png'
import Dinner from './Dinner';
const Dinners = () => {
    const dinners = [
        {
            name: 'Baked chicken',
            description: "Forget dry chicken with our Juicy Oven Baked Chicken Breast Recipe! Tender and full flavoured boneless chicken breasts cook perfectly!",
            price: 11.99,
            img: dinner1,
            id: 13

        },
        {
            name: 'Lemony salmon piccata ',
            description: "Season salmon fillets with salt and pepper and dredge in flour, shaking off any excess flour. · In a large skillet over medium heat, heat olive ..",
            price: 49.99,
            img:  dinner2,
            id: 14
        },
        {
            name: 'garlic butter baked salmon',
            description: "In a small bowl, add lemon juice, garlic, and melted butter or melted ghee. Whisk everything together. ... Place the salmon on the prepared baking .",
            price: 56.99,
            img: dinner3,
            id: 15
        },
        {
            name: 'French fries with cheese',
            description: "Cheese fries or cheesy chips is a dish consisting of French fries covered in cheese, with the possible addition of various other toppings.",
            price: 68.99,
            img: dinner4,
            id: 16
        },
        {
            name: 'pork tenderloin with quinoa pilaf ',
            description: "CPork Tenderloin with Quinoa Pilaf ... Directions: Heat 1 tablespoon oil in medium saucepan on medium. Add garlic and cook, stirring occasionally, until toasted!",
            price: 79.99,
            img: dinner5,
            id: 11
        },
        {
            name: 'salmon with grapefruit and lentil salad',
            description: "This hearty dinner of Salmon with Grapefruit and Lentil Salad, full of protein-packed lentils and heart-healthy salmon, takes only 15 minutes ..",
            price: 129.99,
            img: dinner6,
            id: 12
        }
    ]
    
    return (
        <div className='container text-center'>
            <div className='row gap-4 align-item-center  justify-content-md-between'>
                
                    {
                        dinners.map(dinner=> <Dinner
                            key={dinner.id}
                            dinner={dinner}
                        ></Dinner>)
                    }

                

            </div>
        </div>
    );
};

export default Dinners;