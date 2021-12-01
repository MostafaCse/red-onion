import React from 'react';
import './Body.css';
const Body = (itemMenu) => {
   const { photo, name, price, dream } = itemMenu.itemMenu;

   return (
      <div className="col-md-4 col-sm-6 con-handle">
         <button onClick={() => itemMenu.menuHandle(itemMenu.itemMenu)} className="handleBtn">
            <img className="photoHandle img-fluid" src={photo} alt=""></img>
            <h5>{name}</h5>
            <p>{dream}</p>
            <h3>${price}</h3>
         </button>
      </div>


   )
}
export default Body;