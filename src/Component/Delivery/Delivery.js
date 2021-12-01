import React, { useState } from 'react';
import './Delivery.css';
import mag from '../../Image/map.jpg';
import hamim from '../../Image/hamim.png';
import rider from '../../Image/rider.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Delivery = () => {
    const [contact, setContact] = useState(true);
    const contactHandle = () => {
        setContact(false);
    }
    return (
        <div className="row">
            <div style={{ textAlign: 'center', marginTop: '5%', paddingLeft: '10%' }} className="col-md-6 map-img">
                <img src={mag} alt=""></img>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2%' }} className="col-md-6">
                <div className="row">
                    <div className="col-md-6 rider">
                        <img src={rider} alt=""></img>
                        <div style={{ backgroundColor: 'white', padding: '10px 10px' }}>
                            <FontAwesomeIcon style={{ color: 'red' }} icon={faDotCircle} size='xs'></FontAwesomeIcon>
                            <span className="infoHighlight">Your Location</span>
                            <p style={{ color: 'grey', marginLeft: '4%' }}>107 Rd No 8</p>
                            <FontAwesomeIcon style={{ color: 'red' }} icon={faDotCircle} size='xs'></FontAwesomeIcon>
                            <span className="infoHighlight">Shope Address</span>
                            <p style={{ color: 'grey', marginLeft: '4%' }}>Gulshan Plaza Restaura GPH</p>
                        </div>
                        <h1>9.30 AM</h1>
                        <p style={{ color: 'grey', marginLeft: '4%' }}>Estimated delivery time</p>

                        <div className="hamim-highlight">
                            <div style={{ padding: '10px 10px' }} className="row ">
                                <div style={{ textAlign: 'end' }} className="col-md-6 col-sm-6 hamim">
                                    <img src={hamim} alt=""></img>
                                </div>
                                <div style={{ textAlign: 'start' }} className="col-md-4 col-sm-4">
                                    <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Hamim</span><br />
                                    <span style={{ color: 'grey' }}>Your rider</span>
                                </div>
                            </div>

                        </div>

                        {
                            contact && <div>
                                <button onClick={contactHandle} id="HighlightButton">Contact</button>
                            </div>
                        }
                        {
                            !contact && <div>
                                <p>Name=<span style={{ fontWeight: 'bold' }}>Mohammad Hamid</span></p>
                                <p>Phone=<span style={{ fontWeight: 'bold' }}>01952-735581</span></p>
                                <footer style={{ color: 'grey' }}>call the above number for urgent contact</footer>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Delivery;