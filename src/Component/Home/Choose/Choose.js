import React from 'react';
import './Choose.css';
import fastDelivery from '../../../Image/fast-delivery.png';
import notification from '../../../Image/notification.png';
import homeDelivery from '../../../Image/home-delivery.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBus, faTruck } from '@fortawesome/free-solid-svg-icons';

const Choose = () => {
    return (
        <div style={{ marginTop: '50px' }}>
           <div className="row">
           <div className="col-md-6">
                <h3>Why you choose us</h3>
                <p> Aliquip minim veniam ut esse consectetur veniam labore elit occaecat.Officia commodo Lorem culpa ut consectetur et ipsum voluptate fugiat eu. Labore nostrud voluptate do minim non eiusmod minim. </p>
            </div>
           </div>
            <div className="row">

                <div className="col-md-4 col-sm-6">
                    <img className="img-fluid" src={fastDelivery} alt=""></img>
                    <div style={{ marginTop: '30px' }}>
                        <FontAwesomeIcon style={{ color: 'red' }} icon={faBus}></FontAwesomeIcon>
                        <span className="lineHighlight">Fast Delivery</span>
                        <p style={{ marginTop: '30px' }}>Minim aute sit magna consequat. Lorem nostrud excepteur nulla elit ullamco reprehenderit quis incididunt eiusmod sint. Labore reprehenderit ullamco </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <img className="img-fluid" src={notification} alt=""></img>
                    <div style={{ marginTop: '30px' }}>
                        <FontAwesomeIcon style={{ color: 'red' }} icon={faBell}></FontAwesomeIcon>
                        <span className="lineHighlight">A Good Auto Responder</span>
                        <p style={{ marginTop: '30px' }}>Minim aute sit magna consequat. Lorem nostrud excepteur nulla elit ullamco reprehenderit quis incididunt eiusmod sint. Labore reprehenderit ullamco </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <img className="img-fluid" src={homeDelivery} alt=""></img>
                    <div style={{ marginTop: '30px' }}>
                        <FontAwesomeIcon style={{ color: 'red' }} icon={faTruck}></FontAwesomeIcon>
                        <span className="lineHighlight">Home Delivery</span>
                        <p style={{ marginTop: '30px' }}>Minim aute sit magna consequat. Lorem nostrud excepteur nulla elit ullamco reprehenderit quis incididunt eiusmod sint. Labore reprehenderit ullamco </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Choose;