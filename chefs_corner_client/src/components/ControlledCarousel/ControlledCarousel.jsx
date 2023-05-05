import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarosel.css'

import banner from '../../assets/banner.jpg'
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='container' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-image"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-white'>Traditional Steak And Kidney Pie</h3>
                    <p className='text-white description'>Traditional steak and kidney pie is a savory British dish made with beef, kidneys, onions, and gravy, all encased in a flaky pastry crust.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-image"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-white'>Grilled Lemon-Thyme Steaks</h3>
                    <p className='text-white description'>Grilled lemon-thyme steaks are a delicious and simple dish made by marinating steaks in a mixture of lemon juice, thyme, garlic, and olive oil, then grilling them to perfection. The result is tender, juicy steaks with a flavorful herb and citrus-infused crust.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-image img-fluid"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-white'>Fish and Chips</h3>
                    <p className='text-white description'>
                        Fish and chips is a traditional British dish of deep-fried fish and chips, typically served with condiments like vinegar and tartar sauce.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;