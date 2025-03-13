import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export function TutorialLogin(){
    const[users,setUsers]=useState([]);
    const[cookies,setCookie,removeCookie]=useCookies();
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            "UserId":"",
            "Password":""
        },
        onSubmit:(customer)=>{
            axios({
                method:"get",
                url: "http://localhost:5000/customers",
            })
            .then(response=>{
                setUsers(response.data);
                for(var user of users){
                    if(user.UserId===customer.UserId && user.Password===customer.Password){
                        setCookie("userid",customer.UserId,{expires:new Date('2024-04-02 16:20:42')})
                        navigate("/videos")
                        break;
                    }else{
                       navigate("/error")
                    }
                }
            })
        }
    })



    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange}/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange}/></dd>
                </dl>
                <button>Login</button>
            </form>
            <p>
                <Link to="/register">New Use Register</Link>
            </p>
        </div>
    )
}