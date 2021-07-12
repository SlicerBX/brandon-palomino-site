import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Check out the links below to find out more about me!
                </p>
                <p className="footer-subscription-text">
                    Feel free to browse around.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/about'>About Me</Link>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Github</Link>
                        <Link to='/'>YouTube</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Education</h2>
                        <Link to='/about'>About Me</Link>
                        <Link to='/'>SJSU</Link>
                        <Link to='/'>Reddit</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            BP Logo
                        </Link>
                    </div>
                    <small className="website-rights">Brandon Palomio @2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fa fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className="fa fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className="fa fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className="fa fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className="fa fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
