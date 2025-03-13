import React from "react";
export class Purecomponent extends React.PureComponent{
    constructor(){
        super();
        this.state={
            products:["Tv","Mobile","Watch"],
            msg:'',
            productCopy:[]
        }
    }
    handleLoadClick(){
        this.setState({
            products:["Tv","Mobile","Watch","Shoes"],
            productCopy:this.state.products 
        })
    }
    componentDidUpdate(){
        console.log("Component Will Render on Update");
        this.setState({
            msg:(this.state.products==this.state.productCopy)?"No change Detected":"Change Detected"
        })
    }
    render(){
        return(
            <div>
                <h2>Pure Component  <button onClick={this.handleLoadClick.bind(this)}>Load</button></h2>
                <ol>
                    {
                        this.state.products.map((product)=>
                        <li key={product}>{product}</li>
                        )
                    }
                </ol>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}