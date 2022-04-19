
import breakfast1 from '../../../../../images/breakfast/breakfast1.png'
import breakfast2 from '../../../../../images/breakfast/breakfast2.png'
import breakfast3 from '../../../../../images/breakfast/breakfast3.png'
import breakfast4 from '../../../../../images/breakfast/breakfast4.png'
import breakfast5 from '../../../../../images/breakfast/breakfast5.png'
import breakfast6 from '../../../../../images/breakfast/breakfast6.png'
import Breakfast from './Breakfast';
const Breakfasts = () => {

    const breakfasts = [
        {
            name: 'Eggs Benedict',
            description: "Eggs Benedict is a common American breakfast or brunch dish.",
            price: 6.99,
            img: breakfast1,
            id: 1

        },
        {
            name: 'breakfast sandwich',
            description: "A breakfast sandwich is any sandwich filled with foods associated with the breakfast meal.",
            price: 9.99,
            img: breakfast2,
            id: 2
        },
        {
            name: 'baked chicken',
            description: "Forget dry chicken with our Juicy Oven Baked Chicken Breast Recipe! Tender and full flavoured boneless chicken breasts cook perfectly!",
            price: 10.99,
            img: breakfast3,
            id: 3
        },
        {
            name: 'Bagel and cream cheese',
            description: "A bagel and cream cheese is a common food pairing in American cuisine, the cuisine of New York City, and American Jewish cuisine,",
            price: 6.99,
            img: breakfast4,
            id: 4
        },
        {
            name: 'Full breakfast fried egg toast brunch',
            description: "The full English breakfast often consists of bacon, fried egg, sausage, mushrooms, baked beans, toast, grilled tomatoes, and accompanied with tea or coffee.",
            price: 3.99,
            img: breakfast5,
            id: 5
        },
        {
            name: 'toast croissant egg',
            description: "This Croissant Sandwich Recipe is a great way to start the day! It includes soft scrambled eggs, veggies, and cheddar cheese!",
            price: 19.99,
            img: breakfast6,
            id: 6
        }
    ]
    return (
        <div className='container text-center'>
            <div className='row gap-4 align-item-center  justify-content-md-between'>
                
                    {
                        breakfasts.map(breakfast => <Breakfast
                            key={breakfast.id}
                            breakfast={breakfast}
                          
                        ></Breakfast>)
                    }

                

            </div>
        </div>
    );
};

export default Breakfasts;