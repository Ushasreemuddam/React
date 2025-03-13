import "./login.css"
export function Login()
{
    var title=prompt("enter title")
    return(
        <div className="container-fuild">
           <form>
            <div className="heading">
                <span className="bi bi-person-fill"></span>
                <span>{title}</span>
                <span className="bi bi-x-square"></span>
            </div>
                <dl>
                    <dt >User Name</dt>
                    <dd><input type="text" className="form-control"></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control"></input></dd>
                </dl>
                <button className="btn btn-primary w-100">Login</button>
           </form>
        </div>
    )
}