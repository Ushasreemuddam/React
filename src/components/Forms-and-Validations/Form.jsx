
import { useState } from "react";

export function FormDemo(){
    const[userDetails,setuserDetails]=useState({"UserName":"","Age":0,"City":"","Mobile":""});
    const[errorDetails,seterror]=useState({"UserName":"","Age":0,"City":"","Mobile":""});
    function handleNameChange(e){
        if(e.target.value==""){
            seterror({
                UserName:"User Name Required"
            })
        }else{
           seterror({
            UserName:""
           })
           setuserDetails({
            UserName:e.target.value,
            Age:userDetails.Age,
            City:userDetails.City,
            Mobile:userDetails.Mobile
            })
        }

    }
    function handleAgeChange(e){
        if(isNaN(e.target.value)){
            seterror({
                Age:"Age must be a number."
            })
        }else{
            seterror({
                Age:""
            })
            setuserDetails({
                UserName:userDetails.UserName,
                Age:e.target.value,
                City:userDetails.City,
                Mobile:userDetails.Mobile
            })
        }
    }
    function handleCityChange(e){
        if(e.target.value=="-1"){
            seterror({
                City:"Please select your city."
            })
        }else{
            seterror({
               City:""
            })
            setuserDetails({
                UserName:userDetails.UserName,
                Age:userDetails.Age,
                City:e.target.value,
                Mobile:userDetails.Mobile
            })
        }
    }
    function handleMobileChange(e){
        if(e.target.value.match(/\+91\d{10}/)){
            setuserDetails({
                UserName:userDetails.UserName,
                Age:userDetails.Age,
                City:userDetails.City,
                Mobile:e.target.value
            })
            seterror({
                Mobile:""
            })
        }else{
            seterror({
               Mobile:"Invalid Mobile."
            })
            
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(userDetails));
    }
    return(
        <div>
            <h2>Register user</h2>
            <form onSubmit={handleFormSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={handleNameChange}/></dd>
                    <dd className="text-danger">{errorDetails.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="age" onChange={handleAgeChange}/></dd>
                    <dd className="text-danger">{errorDetails.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="city" onChange={handleCityChange}>
                            <option value={-1}>Select Your City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{errorDetails.City}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={handleMobileChange} /></dd>
                    <dd className="text-danger">{errorDetails.Mobile}</dd>
                </dl>
                <button>Register</button>
                
            </form>
        </div>
    )
}