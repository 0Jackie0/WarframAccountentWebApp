import React from 'react';
import "./listHeader.css";

const ListHeader = (props) =>
{
    let totalQuantity = 0;
    let totalPrice = 0;

    for(let itemIndex in props.itemList)
    {
        totalPrice += props.itemList[itemIndex].eprice * props.itemList[itemIndex].quantity;
        totalQuantity += props.itemList[itemIndex].quantity;
    }


    return (
        <div className="contentArea">
            <span>
                <span className="tagStyle">Total Quantity: </span>{totalQuantity}
            </span>
            <span>
                <span className="tagStyle">Total Price: </span>{totalPrice}
            </span>
            
        </div>
    );
}

export default ListHeader;