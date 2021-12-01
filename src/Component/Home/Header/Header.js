import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../../App';
import breakfast from '../../FakeData/Breakfast';
import dinar from '../../FakeData/Dinar';
import lunch from '../../FakeData/Lunch';
import Footer from '../../Footer/Footer';
import Body from '../Body/Body';
import Choose from '../Choose/Choose';
import './Header.css';

const Header = () => {
    const {itemInformation}=useContext(userContext);
    const [,setItemInfo]=itemInformation;
    const [item, setItem] = useState('Breakfast');
    const [itemDetail, setItemDetail] = useState(true);
    const [itemReview, setItemReview] = useState({});

    const itemHandle = (props) => {
        setItem(props);
        setItemDetail(true);
    }
    const formItemHandle = (e) => {
        e.preventDefault();
        const { food } = e.target;
        setItem(food.value);
        setItemDetail(true);
        food.value = "";
    }
    let history=useHistory();
    const menuHandle = (props) => {
        setItemInfo(props);
        setItemReview(props);
        setItemDetail(false);

    }
  
    const addHandle=()=>{
   history.push(`/Details`);
    }

    return (
        <div>
            <div className="bgHighlight">
                <div className="search-highlight">
                    <h1>{item}</h1>
                    <h1>Best food waiting for your belly</h1>
                    <form onSubmit={formItemHandle}>
                        <input name="food" id="input-highlight" placeholder="Search food items" type="text"></input>
                        <input className="button-highlight" type='submit' value="Search"></input>
                    </form>
                </div>
            </div>
            <div className="buttonBox">
                <button onClick={() => itemHandle('Breakfast')} className="clickButtonHighlight">Breakfast</button>
                <button onClick={() => itemHandle('Lunch')} className="clickButtonHighlight">Lunch</button>
                <button onClick={() => itemHandle('Dinner')} className="clickButtonHighlight">Dinner</button>
            </div>
            {
                item === 'Breakfast' && itemDetail === true && <div className="row">
                    {
                        breakfast.map(item => <Body menuHandle={menuHandle} itemMenu={item} key={item.name}></Body>)
                    }
                </div>
            }
            {
                item === 'Lunch' && itemDetail === true && <div className="row">
                    {
                        lunch.map(item => <Body menuHandle={menuHandle} itemMenu={item} key={item.name}></Body>)
                    }
                </div>
            }
            {
                item === 'Dinner' && itemDetail === true && <div className="row">
                    {
                        dinar.map(item => <Body menuHandle={menuHandle} itemMenu={item} key={item.name}></Body>)
                    }
                </div>
            }
            {
                !itemDetail && <div >
                    <div className="row itemReview">
                        <div className="col-md-6 col-sm-6 col-xs-6">

                            <h1 >{itemReview.name}</h1>
                            <p>Cupidatat ullamco occaecat pariatur aute ea proident aute ut commodo ex adipisicing culpa. Adipisicing sunt fugiat commodo qui ea est et aliquip enim. Qui in occaecat exercitation proident irure consequat commodo. commodo elit pariatur sint consequat aliqua anim pariatur in nisi minim laborum.</p>
                            <button onClick={addHandle} style={{ marginTop: '50px' }} className="button-highlight"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faCartPlus}></FontAwesomeIcon> Add</button>
                            <div className="row footerPhoto">
                                <div className="col-md-3 col-sm-3 col-xs-3">
                                    <img src={itemReview.photo} alt=""></img>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3">
                                    <img src={itemReview.photo} alt=""></img>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <img src={itemReview.photo} alt=""></img>
                        </div>
                    </div>
                </div>
            }
            <Choose></Choose>
            <Footer></Footer>
        </div>
    )
}
export default Header;