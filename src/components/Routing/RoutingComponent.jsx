import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
export function Routing(){
    var now = new Date();
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <h2>Routing Tutorial-Page requested at :  {now.toLocaleTimeString()}</h2>
            <ol>
                <li><Link to="html">HTML</Link></li>
                <li><Link to="css">CSS</Link></li>
                <li><Link to="js">Java Script</Link></li>
            </ol>
            <hr size="4"/>
            <Routes>
                <Route path="html" element={
                <div>
                    <h2>HTML</h2>
                    <p>It is markup Language..</p>
                </div>
            }/>
            <Route path="css" element={
                <div>
                    <h2>CSS</h2>
                    <p>It defines styles for HTML.</p>
                </div>
            }/>
            <Route path="js" element={
                <div>
                    <h2>JavaScript</h2>
                    <p>It is language to Manipulate Dom.</p>
                </div>
            }/>
            <Route path="/" element={
                <div>
                    <h2>Home</h2>
                    <p>Welcome To Tutorial Home</p>
                </div>
            }/>
            <Route path="*" element={
                <div>
                    <h2>Not Found</h2>
                    <p>Tutorial you requested not Found</p>
                </div>
            }/>
            </Routes>
            </BrowserRouter>

        </div>
    )
}