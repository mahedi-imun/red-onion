import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-container '>
            <div className='d-md-flex flex-column justify-content-center align-items-center w-50 mx-auto '>
                <h2 className=' header-title mb-md-5   '> Best food waiting for Your belly</h2>
                <InputGroup className="   ">
                    <FormControl
                        
                        placeholder="Search Food Items"
                        aria-label="search food items"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text
                    
                    className='text-white pointer'
                    style={{ backgroundColor: "#F92C54" }}
                     
                     id="basic-addon2">search</InputGroup.Text>
                </InputGroup>
            </div>

        </div>
    );
};

export default Banner;