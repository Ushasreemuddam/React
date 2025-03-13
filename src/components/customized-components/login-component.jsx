export function LoginComponent(props){

    return(
        <div className="container-fluid">
            <form className={`w-25 border border-2 border-primary p-2 ${props.theme}`}>
                <h3><span className="bi bi-person-fill">{props.title}</span></h3>
                <dl>
                    <dt>{props.login_id}</dt>
                    <dd><input type={props.login_type} className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control"/></dd>
                </dl>
                <button className="btn btn-primary w-100">{props.button_text}</button>
            </form>
        </div>
    )
}