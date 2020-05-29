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
            <span>Total Quantity: {totalQuantity}</span>
            <span>Total Price: {totalPrice}</span>
        </div>
    );
}

export default ListHeader;