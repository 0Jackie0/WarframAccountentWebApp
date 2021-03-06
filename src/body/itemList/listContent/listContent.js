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
                    <img src={ props.item.imageString !== "" ? "data:image/png;base64," + props.item.imageString : itemImage} alt="item" />
                </div>

                <div className="itemInfoArea">
                    <span>
                        <span className="tagStyle">Item Name: </span>{props.item.name}
                    </span>

                    <span>
                        <span className="tagStyle">Quantity: </span>{props.item.quantity}
                    </span>

                    <span>
                        <span className="tagStyle">Base Price: </span>{props.item.bprice}
                    </span>

                    <span>
                        <span className="tagStyle">Expected Price: </span>{props.item.eprice}
                    </span>
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