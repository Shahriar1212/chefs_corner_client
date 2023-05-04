import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className="footer">
                    
                    <div className='col'>
                        <h3>Chefs Corner</h3>
                        <p>Experience culinary excellence with our expertly crafted dishes, made with the freshest ingredients. Taste the difference and book your table today!</p>

                    </div>
                    

                    

                    <div className='col'>
                        <h4>Quick Links</h4>
                        <a href="#">Help Desk</a>
                        <a href="#">Sales</a>
                        <a href="#">Developpers</a>

                    </div>

                    <div className='col'>
                        <h4>Contact</h4>
                        <p>524 Broadway</p>
                        <p>+1 777 - 978 - 5570</p>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;