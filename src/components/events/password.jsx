import { useState } from "react"
export function Password(){
    const[country,setcountry]=useState('');
    const[tip,setTip]=useState('');
    const[regexp,setRegExp]=useState(/ /);
    const[mobile,setMobile]=useState('');
    const[mobileError,setMobileError]=useState('');

    function handlecountrychange(e){
        setcountry(e.target.value);
        switch(e.target.value){
            case "India":
                setTip('+91 10 digits');
                setRegExp(/\+91\d{10}/);
                break;
            case "US":
                setTip('+(1)(987))(654) 321 9876');
                setRegExp(/\+\(1\)\(\d{2}\)\(\d{3}\)\s\d{3}\s\d{4}/);
                break;
            case "UK":
                setTip('+(44)(987) 6543 3210');
                setRegExp(/\+\(44\)\(\d{3}\s\d{4}\s\d{4}\)/);
                break;
        }
    }
    function handlesubmitclick(){
        if(mobile.match(regexp)){
            document.write("<h2>Verified Successfully</h2>");
        }else{
            setMobileError(`Invalid Mobile ${tip}`);
        }
    }
    function handleMobileChange(e){
        setMobile(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl>
                <dt>Your Country</dt>
                <dd>
                <select onChange={handlecountrychange}>
                    <option>Select Country</option>
                    <option>India</option>
                    <option>US</option>
                    <option>UK</option>
                </select>
                </dd>
                <dt>Mobile</dt>
                <dd><input type="text" onChange={handleMobileChange} placeholder={tip}/></dd>
                <dd className="text-danger">{mobileError}</dd>
                <dd className="btn btn-primary" onClick={handlesubmitclick}>Submit</dd>
            </dl>
        </div>
    )
}