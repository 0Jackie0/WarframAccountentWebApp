import React from 'react';

const ListSelection = (props) =>
{
    return (
        <div className="listSelectionArea">
            <div className="searchArea">
                <span>Search</span>
                <input type="text" onChange={(event) => {props.searchFunction(event.target.value)}}/>
            </div>

            <button onClick={() => {props.addFunction()}}>Add</button>

            <div className="filterSelectionArea">
                <span>Filter By: </span>
                <select onChange={(event) => {props.filterFunction(event.target.value)}}>
                    <option value="-1">- - -</option>
                    {props.filterList.map(filterOption => <option key={filterOption.typeId} value={filterOption.typeId}>{filterOption.typeName}</option>)}
                </select>
            </div>

            <div className="orderSelectionArea">
                <span>Order By: </span>
                <select onChange={(event) => {props.orderFunction(event.target.value)}}>
                    {props.orderList.map(orderOption => <option key={orderOption.orderId} value={orderOption.orderId}>{orderOption.orderName}</option>)}
                </select>
            </div>
        </div>
    );
}

export default ListSelection;