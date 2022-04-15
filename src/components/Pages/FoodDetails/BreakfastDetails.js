
import { FaCartArrowDown, FaPlus, FaMinus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import breakfast1 from '../../../images/breakfast/breakfast1.png'
import breakfast2 from '../../../images/breakfast/breakfast2.png'
import breakfast3 from '../../../images/breakfast/breakfast3.png'
import breakfast4 from '../../../images/breakfast/breakfast4.png'
import breakfast5 from '../../../images/breakfast/breakfast5.png'
import breakfast6 from '../../../images/breakfast/breakfast6.png'
import './FoodDeatils.css'
const breakfasts = [
    {
        name: 'Eggs Benedict',
        description: "Eggs Benedict is a common American breakfast or brunch dish.",
        price: 6.99,
        img: breakfast1,
        id: 1,
        quantity: 1

    },
    {
        name: 'breakfast sandwich',
        description: "A breakfast sandwich is any sandwich filled with foods associated with the breakfast meal.",
        price: 9.99,
        img: breakfast2,
        id: 2,
        quantity: 1
    },
    {
        name: 'baked chicken',
        description: "Forget dry chicken with our Juicy Oven Baked Chicken Breast Recipe! Tender and full flavoured boneless chicken breasts cook perfectly!",
        price: 10.99,
        img: breakfast3,
        id: 3,
        quantity: 1
    },
    {
        name: 'Bagel and cream cheese',
        description: "A bagel and cream cheese is a common food pairing in American cuisine, the cuisine of New York City, and American Jewish cuisine,",
        price: 6.99,
        img: breakfast4,
        id: 4,
        quantity: 1
    },
    {
        name: 'Full breakfast fried egg toast brunch',
        description: "The full English breakfast often consists of bacon, fried egg, sausage, mushrooms, baked beans, toast, grilled tomatoes, and accompanied with tea or coffee.",
        price: 3.99,
        img: breakfast5,
        id: 5,
        quantity: 1
    },
    {
        name: 'toast croissant egg',
        description: "This Croissant Sandwich Recipe is a great way to start the day! It includes soft scrambled eggs, veggies, and cheddar cheese!",
        price: 19.99,
        img: breakfast6,
        id: 6,
        quantity: 1
    }
];
const BreakfastDetails = () => {
    const id = useParams()
    
    const breakfast = breakfasts.map(breakfast => breakfast);
    const breakfastDetails = breakfast.filter(food => food.id == id.id)
    let { name, img, description, price} = breakfastDetails[0];
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

export default BreakfastDetails;