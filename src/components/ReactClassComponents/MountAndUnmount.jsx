import React from "react";
export class LoginComponent extends React.Component{
    componentDidMount(){
        alert("Login Component Requested and Willmount");
    }
    componentWillUnmount(){
        alert("Login Component will unmount");
    }
    render(){
        return(
            <div><h2>User Login</h2></div>
        )
    }
}
export class RegisterComponent extends React.Component{
    componentDidMount(){
        alert("Register Component Requested and Willmount");
    }
    componentWillUnmount(){
        alert("Register Component will unmount");
    }
    render(){
        return(
            <div><h2>Register User</h2></div>
        )
    }
}
export class LifeCycleDemo extends React.Component{
    constructor(){
        super();
        this.state={
            view:''
        }
    }
    handleLoginClick(){
        this.setState({
            view:<LoginComponent/>
        })
    }
    handleRegisterClick(){
        this.setState({
            view:<RegisterComponent/>
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>Life Cycle</h2>
                <button onClick={this.handleLoginClick.bind(this)}>Login</button>
                <button onClick={this.handleRegisterClick.bind(this)}>Register</button>
                <hr/>
                {this.state.view}
            </div>
            
        )
    }
}