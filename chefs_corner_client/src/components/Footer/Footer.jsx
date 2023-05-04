import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

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
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        

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