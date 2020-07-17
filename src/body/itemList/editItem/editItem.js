import React, { Component } from 'react';
import "./editItem.css"
import itemImage from "../../../drawable/220px-Warframe_Cover_Art.png"

const MAX_FILE_SIZE = 2 * 1024 * 1024;

class EditItem extends Component
{
    constructor(props)
    {
        super();

        let itemCheck = props.target.name !== "";

        this.state = {
            target: props.target,
            errorMessage: "",
            goodItem: itemCheck
        }
        this.imageInput = React.createRef();
        this.imageView = React.createRef();

        this.changeImage = this.changeImage.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {

        if(this.props.target !== nextProps.target)
        {
            let itemCheck = nextProps.target.name !== "";

            this.setState({
                target: nextProps.target,
                errorMessage: "",
                goodItem: itemCheck
            })
        }

        return true;
      }

    changeName = (event) =>
    {
        let tempTarget = {...this.state.target}

        tempTarget.name = event.target.value;

        let message = "";
        let itemCheck = true;

        if (event.target.value === "")
        {
            message = "Item name cannot be empty!";
            itemCheck = false;
        }

        this.setState(
            {
                target: tempTarget,
                errorMessage: message,
                goodItem: itemCheck
            }
        );
    }

    changeQuantity = (event) =>
    {
        let tempTarget = {...this.state.target}

        if(event.target.value !== "")
        {
            tempTarget.quantity = parseInt(event.target.value, 10);
        }
        else
        {
            tempTarget.quantity = 0;
        }
        
        this.setState(
            {
                target: tempTarget
            }
        );
    }

    changeEPrice = (event) =>
    {
        let tempTarget = {...this.state.target}

        if(event.target.value !== "")
        {
            tempTarget.eprice = parseInt(event.target.value, 10);
        }
        else
        {
            tempTarget.eprice = 0;
        }

        this.setState(
            {
                target: tempTarget
            }
        );
    }

    changeBPrice = (event) =>
    {
        let tempTarget = {...this.state.target}

        if(event.target.value !== "")
        {
            tempTarget.bprice = parseInt(event.target.value, 10);
        }
        else
        {
            tempTarget.bprice = 0;
        }

        this.setState(
            {
                target: tempTarget
            }
        );
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
            if (event.target.files[0].size > MAX_FILE_SIZE)
            {
                alert("The image has to be smaller than 2M");
            }
            else
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
                
                });

                promise.then(result => {
                    const targetCopy = {...this.state.target};

                    targetCopy.imageString = result.split(",")[1];
    
                    this.setState(
                        {
                            target: targetCopy
                        }
                    );
                }, 
                err => {
                    console.log(err)
                })
            }
        }
    }

    render()
    {
        return (
            <div className="editArea">
                <div className="titleArea">
                    <span className="titleStyle">{this.props.isAddNew === false ? "Edit Item" : "Add Item"}</span>
                </div>

                <div className="topArea">
                    <input type="file" ref={imageInput => this.imageInput = imageInput} accept=".jpg, .png" multiple={false} onChange={(event) => {this.fileChange(event)}} style={{display: "none"}}/>
                    
                    <div className="itemImageArea">
                        <img src={this.state.target.imageString !== "" ? "data:image/png;base64," + this.state.target.imageString : itemImage} ref={imageView => this.imageView = imageView} onClick={() => {this.changeImage()}} alt="Item"/>
                    </div>

                    <div className="nameQuantityArea">
                        <span className="tagStyle, errorMessage">{this.state.errorMessage}</span>

                        <span className="editFieldArea">
                            <span className="tagStyle">Item name: </span>
                            <input type="text" placeholder="Item Name" value={this.state.target.name} onChange={(event) => {this.changeName(event)}}/>
                        </span>

                        <span className="editFieldArea">
                            <span className="tagStyle">Item quantity: </span>
                            <input type="number" value={Number(this.state.target.quantity).toString()} onChange={(event) => {this.changeQuantity(event)}} min="0"/>
                        </span>
                    </div>
                </div>
    
                <div className="midArea">
                    <span className="editFieldArea">
                        <span className="tagStyle">Item type: </span>
                        <select className="dropdownStyle" value={this.state.target.type} onChange={(event) => {this.changeType(event)}}>
                            {this.props.typeList.map(type => <option id={type.typeId} key={type.typeId} value={type.typeId}>{type.typeName}</option>)}
                        </select>
                    </span>
                    
                    <span className="editFieldArea">
                        <span className="tagStyle">Exceptected price: </span>
                        <input type="number" value={Number(this.state.target.eprice).toString()} onChange={(event) => {this.changeEPrice(event)}} min="0"/>
                    </span>

                    <span className="editFieldArea">
                        <span className="tagStyle">Base price: </span>
                        <input type="number" value={Number(this.state.target.bprice).toString()} onChange={(event) => {this.changeBPrice(event)}} min="0"/>
                    </span>
                </div>
    
                <div className="bottomArea">
                    {this.props.isAddNew === false ? <button onClick={() => {this.props.deleteFunction(this.state.target.itemId)}}>Delete</button> : null}
                    <div className="saveCancleArea">
                        <button onClick={() => {this.setState({errorMessage: ""}); this.props.cancleFunction()}}>Cancle</button>
                        
                        {this.state.goodItem === false ? <button onClick={() => {this.setState({errorMessage: "Item name cannot be empty!"});}}>Save</button> : <button onClick={() => {this.props.saveFunction(this.state.target, this.props.isAddNew)}}>Save</button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditItem;