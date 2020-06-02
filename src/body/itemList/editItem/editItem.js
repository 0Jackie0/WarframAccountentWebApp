import React, { Component } from 'react';
import "./editItem.css"
import itemImage from "../../../drawable/220px-Warframe_Cover_Art.png"

class EditItem extends Component
{
    constructor(props)
    {
        super();

        this.state = {
            target: props.target,
        }
        this.imageInput = React.createRef();
        this.imageView = React.createRef();

        this.changeImage = this.changeImage.bind(this)
    }

    changeName = (event) =>
    {
        let tempTarget = {...this.state.target}

        tempTarget.name = event.target.value;

        this.setState(
            {
                target: tempTarget
            }
        );
    }

    changeQuantity = (event) =>
    {
        if(event.target.value !== "")
        {
            let tempTarget = {...this.state.target}

            tempTarget.quantity = parseInt(event.target.value, 10);

            this.setState(
                {
                    target: tempTarget
                }
            );
        }
    }

    changeEPrice = (event) =>
    {
        if(event.target.value !== "")
        {
            let tempTarget = {...this.state.target}

            tempTarget.eprice = parseInt(event.target.value, 10);

            this.setState(
                {
                    target: tempTarget
                }
            );
        }
    }

    changeBPrice = (event) =>
    {
        if(event.target.value !== "")
        {
            let tempTarget = {...this.state.target}

            tempTarget.bprice = parseInt(event.target.value, 10);

            this.setState(
                {
                    target: tempTarget
                }
            );
        }
    }

    changeType = (event) =>
    {
        let tempTarget = {...this.state.target}

        tempTarget.type = event.target.value;

        this.setState(
            {
                target: tempTarget
            }
        );
    }

    changeImage = () =>
    {
        this.imageInput.click();
    }

    fileChange = (event) =>
    {
        event.stopPropagation();
        event.preventDefault();
        
        if (event.target.files[0])
        {
            const promise = new Promise((resolve, reject) => {
                const reader = new FileReader()
            
                reader.readAsDataURL(event.target.files[0])
            
                reader.onload = () => {
                if (!!reader.result) {
                    resolve(reader.result)
                }
                else {
                    reject(Error("Failed converting to base64"))
                }
                }
            
            })
            promise.then(result => {
                const targetCopy = {...this.state.target}
                targetCopy.imageString = result.split(",")[1];

                this.setState(
                    {
                        target: targetCopy,
                    }
                );
            }, 
            err => {
                console.log(err)
            })
        }
        
    }

    render()
    {
        return (
            <div className="editArea">
                <div className="topArea">
                    <input type="file" ref={imageInput => this.imageInput = imageInput} accept=".jpg, .png" multiple={false} onChange={(event) => {this.fileChange(event)}} style={{display: "none"}}/>
                    <img src={this.state.target.imageString !== "" ? "data:image/png;base64," + this.state.target.imageString : itemImage} ref={imageView => this.imageView = imageView} onClick={() => {this.changeImage()}} alt="Item"/>
                    {/* <img src={this.state.imageDisplay !== "" ? this.state.imageDisplay : itemImage} ref={imageView => this.imageView = imageView} onClick={() => {this.changeImage()}} alt="Item"/> */}

                    <div className="nameQuantityArea">
                        <span>Item name:</span>
                        <input type="text" value={this.state.target.name} onChange={(event) => {this.changeName(event)}}/>
                        <span>Item quantity:</span>
                        <input type="number" value={this.state.target.quantity} onChange={(event) => {this.changeQuantity(event)}}/>
                    </div>
                </div>
    
                <div className="midArea">
                    <span>Item type:</span>
                    <select value={this.state.target.type} onChange={(event) => {this.changeType(event)}}>
                        {this.props.typeList.map(type => <option id={type.typeId} key={type.typeId} value={type.typeId}>{type.typeName}</option>)}
                    </select>

                    <span>Exceptected price:</span>
                    <input type="number" value={this.state.target.eprice} onChange={(event) => {this.changeEPrice(event)}}/>
                    <span>Base price:</span>
                    <input type="number" value={this.state.target.bprice} onChange={(event) => {this.changeBPrice(event)}}/>
                </div>
    
                <div className="bottomArea">
                    {this.props.isAddNew === false ? <button onClick={() => {this.props.deleteFunction(this.state.target.itemId)}}>Delete</button> : null}
                    <div className="saveCancleArea">
                        <button onClick={() => {this.props.cancleFunction()}}>Cancle</button>
                        <button onClick={() => {this.props.saveFunction(this.state.target, this.props.isAddNew)}}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditItem;