import React from 'react';
import "./listSelection.css";

const ListSelection = (props) =>
{
    return (
        <div className="listSelectionArea">
            <div className="searchArea">
                <span className="tagStyle">Search </span>
                <input type="text" placeholder="Item Name" onChange={(event) => {props.searchFunction(event.target.value)}}/>
            </div>

            {/* <button onClick={() => {props.addFunction()}}>Add</button> */}

            <div className="dropdownArea">
                <div className="filterSelectionArea">
                    <span className="tagStyle">Filter By: </span>
                    <select className="dropdownStyle" onChange={(event) => {props.filterFunction(event.target.value)}}>
                        <option value="-1">- - -</option>
                        {props.filterList.map(filterOption => <option key={filterOption.typeId} value={filterOption.typeId}>{filterOption.typeName}</option>)}
                    </select>
                </div>

                <div className="orderSelectionArea">
                    <span className="tagStyle">Order By: </span>
                    <select className="dropdownStyle" onChange={(event) => {props.orderFunction(event.target.value)}}>
                        {props.orderList.map(orderOption => <option key={orderOption.orderId} value={orderOption.orderId}>{orderOption.orderName}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ListSelection;