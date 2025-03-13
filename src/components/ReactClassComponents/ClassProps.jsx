import React from "react";
export class LoginTemplate extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
            <h2>{this.props.title}</h2>
            <dl>
                <dt>{this.props.loginid}</dt>
                <dd><input type={this.props.logintype}/></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
            </dl>
            <button>Login</button>
            </div>
        )
    }
}
export class ClassProperties extends React.Component{
    render(){
        return(
            <div>
                <h2>Class Properties</h2>
                <LoginTemplate title="Admin Login" loginid="Email" logintype="email"/>
            </div>
        )
    }
}