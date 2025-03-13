import { useState } from "react";
export function KeyDemo1(){

    const[username,setusername]=useState('usha');
    const[tip,settip]=useState('');
    function ChangeCase(){
        setusername(username.toUpperCase())
        if(username===''){
            settip('User Name Required');
        }else{
            settip('');
        }
    }
    function handleuserchange(e){
        setusername(e.target.value)
    }
    function ShowTip(){
        settip('Name in block letters only')
    }

    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onFocus={ShowTip} onChange={handleuserchange} value={username} onBlur={ChangeCase} placeholder="Name in block letters"/></dd>
                <dd>{tip}</dd>
            </dl>
        </div>
    )
}