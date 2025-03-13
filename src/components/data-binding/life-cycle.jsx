import { useEffect,useState } from "react";
export function Login(){
    useEffect(()=>{
        alert('Login Component will mount');
        return()=>{
        alert('Login Component will unmount');
    }
    },[]);
    return(
        <div>
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
            </dl>
        </div>
    )
    
}
export function Register(){
    useEffect(()=>{
        alert('Register Component will mount')
        return()=>{
        alert('Register Component will Unmount')   
    }
    },[]);
    
    return(
        <h2>Register New User</h2>
    )
}
export function LifeCycle(){
    const[template,setTemplate]=useState('');
    function  LoginClick(){
        setTemplate(<Login/>);
    }
    function  RegisterClick(){
        setTemplate(<Register/>);
    }

    return(
        <div>
        <h3>Mount Demo</h3>
        <button onClick={LoginClick}>Login</button>
        <button onClick={RegisterClick}>Register</button>
        <hr/>
        <div>
            {template}
        </div>
    </div>

    )
}