import React, { Component } from 'react';
import ItemList from "./itemList/itemList";
import AdVideo from "./adVideo/adVideo";
import "./body.css"


class BodyContent extends Component
{
    constructor(props, context)
    {
        super(props, context);

        this.state = {
            playAd: true
        }

        this.closeVido = this.closeVido.bind(this);
    }

    closeVido = () =>
    {
        this.setState(
            {
                playAd: false
            }
        )
    }

    render()
    {
        return (
            <div className="mainBody">
                <ItemList/>
                {this.state.playAd === true ? <AdVideo close={this.closeVido}/> : null}
            </div>
        );
    }
}

export default BodyContent;