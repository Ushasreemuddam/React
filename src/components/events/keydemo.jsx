import { useState } from "react"
export function KeyDemo(){
    const[users]=useState([{"UserName":"usha"},{"UserName":"sree"},{"UserName":"usha12"}]);
    const[userError,setUserError]=useState('');
    const[errorClass,setErrorClass]=useState('');
    const[passwordWarning,setPasswordwaring]=useState({'display':'none'});
    function VerifyUserName(e){
        for(var user of users){
            if(user.UserName===e.target.value){
                setUserError('User Name Taken -Try Another');
                setErrorClass('text-danger')
                break;
            }else{
                setUserError('User Name Available')
                setErrorClass('text-success')
            }
        }
    }
    
    function VerifyPassword(e){
        if(e.which>=65 && e.which<=90){
            setPasswordwaring({'display':'block'});
        }else{
            setPasswordwaring({'display':'none'});
        }
    }
    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={VerifyUserName}/></dd>
                <dd className={errorClass}>{userError}</dd>
                <dt>PassWord</dt>
                <dd><input type="password" onKeyPress={VerifyPassword}/></dd>
                <dd className="text-warning" style={passwordWarning}>
                    <span className="bi bi-exclamation-triangle"></span>Warning:Caps ON
                </dd>
            </dl>

        </div>
    )
}