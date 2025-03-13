import { useSentenceCase } from "./initcap";
import { UseCaptcha } from "./Capcha"
import {useState}  from "react";
export function UserLogin(){
    const [code, setCode] = useState(UseCaptcha());
    //let code=useCaptcha();
    let title=useSentenceCase('user Login');

    const reloadCaptcha = () => {
        setCode(UseCaptcha());
    };


    return(
        <div>
            <form>
                <h2>{title}</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control w-25"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control w-25"/></dd>
                    <dt>Verify Code</dt>
                    <dd>{code}</dd>
                    <button type="button" className="btn btn-secondary w-25" onClick={reloadCaptcha}>Reload</button>
                </dl>
                <button className="btn btn-primary w-25">Login</button>
            </form>
        </div>
    )
}