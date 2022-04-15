import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Breakfasts from '../Breakfasts/Breakfasts';
const Foods = () => {
    const [key, setKey] = useState('breakfast');

    return (
        <div className='container'>
            <div className='d-md-flex flex-md-column align-items-center justify-content-sm-center'>
                <Tabs

                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-5 border-0 ">

                    <Tab className='' eventKey="breakfast" title="Breakfast">
                    <div>
                        <Breakfasts></Breakfasts>
                    </div>
                    </Tab>
                    <Tab eventKey="lunch" title="Lunch">
                        <p>sdfgh</p>
                    </Tab>
                    <Tab eventKey="dinner" title="Dinner" >
                        <p>skgnfbskjgfbv</p>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default Foods;