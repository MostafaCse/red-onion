import React from 'react';
import './Footer.css';
import footerLogo from '../../Image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="row highlightFooter">
                <div className="col-md-6 imgHighlight">
                    <img style={{ paddingLeft: '40px' }} className="img-fluid" src={footerLogo} alt="" />
                </div>
                <div className="col-md-3 col-sm-6">
                    <ul>
                        <li> <a href="www.facebook.com" target="blank">About online food</a></li>
                        <li> <a href="www.github.com" target="blank">Read our blog</a></li>
                        <li> <a href="www.instagram.com" target="blank">Sign upto delivery</a></li>
                        <li> <a href="www.twitter.com" target="blank">Add your restaurant</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <ul>
                        <li> <a href="www.facebook.com" target="blank">Get help</a></li>
                        <li> <a href="www.github.com" target="blank">Read FAQs</a></li>
                        <li> <a href="www.instagram.com" target="blank">View all cities</a></li>
                        <li> <a href="www.twitter.com" target="blank">Restaurant near me</a></li>
                    </ul>
                </div>

                <div style={{ marginTop: '40px' }} className="col-md-7">

                </div>
                <div style={{ marginTop: '40px' }} className="col-md-5 highlightFooterComponent d-flex justify-content-around">
                    <a href="www.facebook.com" target="blank">Privacy Policy.</a>
                    <a href="www.github.com" target="blank">Terms of Use</a>
                    <a href="www.instagram.com" target="blank">Pricing</a>
                </div>
                <footer className="footerHighlight">Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Online food</footer>
            </div>
        </div>
    )
}
export default Footer;