import React, { useContext, useState } from 'react';
import './Details.css';
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import { useHistory } from 'react-router';

const Details = () => {
    let [itemQuantity, setItemQuantity] = useState(1);
    const { itemInformation } = useContext(userContext);
    const [itemInfo] = itemInformation;
    const { register, handleSubmit, errors } = useForm();

    const [button, setButton] = useState(true);
    const onSubmit = data => {
        //   console.log(data);
        setButton(false);
    }
    let history = useHistory();
    const orderHandle = () => {
        history.push('/Delivery')
    }
    //product calculation
    let [subtotal, setSubtotal] = useState(parseFloat(itemInfo.price) * parseFloat(itemQuantity));
    let [tax, setTax] = useState(1);
    const internalCalculation = (props) => {
        let subtotalValue = 0;
        if (props === '+') {
            subtotalValue = parseFloat(itemInfo.price) * (parseFloat(itemQuantity) + 1);
        }
        else {
            subtotalValue = parseFloat(itemInfo.price) * (parseFloat(itemQuantity) - 1);
        }
        setSubtotal(subtotalValue);
        let taxValue = ((5 * subtotalValue) / 100).toFixed(2);
        if (taxValue <= 1) taxValue = 1;
        setTax(taxValue);

    }
    const calculation = (props) => {
        if (props === '+') {
            let value = itemQuantity + 1;
            setItemQuantity(value);
            internalCalculation('+');
        }
        else {
            let value = itemQuantity - 1;
            setItemQuantity(value);
            internalCalculation('-');
        }

    }

    return (
        <div>
            <div className="row componentReposition">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="inputHighlight" name="door" placeholder="Delivery to door" ref={register({ required: true })} />
                        {errors.door && <span style={{ color: 'red' }}>Enter the Delivery door</span>}<br></br>

                        <input className="inputHighlight" name="roadNo" placeholder="Road No" ref={register({ required: true })} />
                        {errors.roadNo && <span style={{ color: 'red' }}>Enter the Road no</span>}   <br />

                        <input className="inputHighlight" name="flat" placeholder="Flat,suite or floor" ref={register({ required: true })} />
                        {errors.flat && <span style={{ color: 'red' }}>Enter the flat</span>}<br />

                        <input className="inputHighlight" name="businessName" placeholder="Business Name" ref={register({ required: true })} />
                        {errors.businessName && <span style={{ color: 'red' }}>enter the business name</span>}<br />

                        <input className="inputHighlight" name="instructor" placeholder="Add delivery instructor" ref={register({ required: true })} />
                        {errors.instructor && <span style={{ color: 'red' }}>Add delivery instructor</span>}<br />
                        {
                            button && <input id="buttonHighlight" value="Save & Continue" type="submit" />
                        }
                        {
                            !button && <input disabled={true} id="buttonHighlight-notActive" value="Save & Continue" />
                        }
                    </form>
                </div>
                <div className="col-md-6">
                    <p style={{ fontSize: '20px', fontFamily: 'monospace' }}>From <span style={{ fontWeight: '800' }}>Gulshan Plaza Restaura GPR</span></p>
                    <p>Arriving in 20-30 min</p>
                    <p>107 Rd No 8</p>
                    <div className="row itemHighlight">
                        <div className="col-md-3">
                            <img src={itemInfo.photo}></img>
                        </div>
                        <div className="col-md-3">
                            <p style={{ fontWeight: '500' }}>{itemInfo.name}</p>
                            <h4 style={{ color: 'red' }}>${itemInfo.price}</h4>
                        </div>
                        <div className="col-md-6">
                            <div className="boxItem">
                                <button onClick={() => calculation('+')} className="buttonHighlight">+</button>
                                <span id="itemQuantity">{itemQuantity}</span>
                                <button onClick={() => calculation('-')} className="buttonHighlight">-</button>
                            </div>

                        </div>

                    </div>
                    <div>
                        <p>Subtotal  {itemQuantity} item <span style={{ paddingLeft: '25%' }}>${subtotal}</span></p>
                        <p>Tax  <span style={{ paddingLeft: '40%' }}>${tax}</span></p>
                        <p>Delivery fee <span style={{ paddingLeft: '30%' }} >${2 * itemQuantity}</span></p>
                        <h2>Total <span style={{ paddingLeft: '30%' }}>${parseFloat(subtotal) + parseFloat(tax) + (2 * itemQuantity)}</span></h2>
                        {
                            !button && <button onClick={orderHandle} className="oderButton">Place Oder</button>
                        }
                        {

                            button && <button disabled={true} className="oderButton-notActive">Place Oder</button>

                        }

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Details;