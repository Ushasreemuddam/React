import {LoginComponent} from "../customized-components/login-component"
export function HomeComponent(){
    return(
        <div className="container-fluid">
            <h2>Admin Portal</h2>
            <LoginComponent theme="bg-warning" title="Admin Login" login_id="Your Email" login_type="email" button_text="Admin Login"/>
            <h2>Customer Portal</h2>
            <LoginComponent theme="bg-success" title="Customer Login" login_id="Your Mobile" login_type="text" button_text="Customer Signin"/>
        </div>
    )
}