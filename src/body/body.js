import React, { Component } from 'react';
import ItemList from "./itemList/itemList";
import "./body.css"


class BodyContent extends Component
{
    render()
    {
        return (
            <div className="mainBody">
                <ItemList/>
            </div>
        );
    }
}

export default BodyContent;