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
                    <img style={{ paddingLeft: '40px' }} className="img-fluid" src={footerLogo}></img>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li> <a href="" target="blank">About online food</a></li>
                        <li> <a href="" target="blank">Read our blog</a></li>
                        <li> <a href="" target="blank">Sign upto delivery</a></li>
                        <li> <a href="" target="blank">Add your restaurant</a></li>
                    </ul>

                </div>
                <div className="col-md-3">
                    <ul>
                        <li> <a href="" target="blank">Get help</a></li>
                        <li> <a href="" target="blank">Read FAQs</a></li>
                        <li> <a href="" target="blank">View all cities</a></li>
                        <li> <a href="" target="blank">Restaurant near me</a></li>
                    </ul>
                </div>

                <div style={{ marginTop: '40px' }} className="col-md-7">
                    <footer className="footerHighlight">Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Online food</footer>
                </div>
                <div style={{ marginTop: '40px' }} className="col-md-5 highlightFooterComponent d-flex justify-content-around">
                   
                </div>
            </div>
        </div>
    )
}
export default Footer;