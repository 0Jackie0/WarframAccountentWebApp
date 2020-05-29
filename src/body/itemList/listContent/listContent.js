import React from 'react';
import "./listContent.css"
import itemImage from "../../../drawable/220px-Warframe_Cover_Art.png"
import upImage from "../../../drawable/up-arrow.png"
import downImage from "../../../drawable/down-arrow.png"

const ListContent = (props) =>
{
    return (
        <div className="itemAreaUp">
            <div className="itemArea" onClick={() => {props.openEdit(props.item)}}>
                <div className="imageArea">
                    <img src={itemImage} alt="item" />
                </div>

                <div className="itemInfoArea">
                    <span>Item Name: {props.item.name}</span>
                    <span>Quantity: {props.item.quantity}</span>
                    <span>Base Price: {props.item.bprice}</span>
                    <span>Expected Price: {props.item.eprice}</span>
                </div>
            </div>
            <div className="itemFunctionArea">
                <button onClick={() => {props.addFunction(props.item.itemId)}}> <img src= {upImage} alt="up arrow"/> </button>
                <button onClick={() => {props.removeFunction(props.item.itemId)}}> <img src= {downImage} alt="down arrow"/> </button>
            </div>
        </div>
        
    );
}

export default ListContent;