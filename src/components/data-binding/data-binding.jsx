export function DataBinding(){
    var categories=["Electronics","Footwear","Fashion"];
    return(
        <div className="container-fluid">
            <h2>Categories</h2>
            <ul className="list-unstyled">
                {
                    categories.map((category)=>
                    <li key={category}><a href="#">{category}</a></li>
                    )
                }
            </ul>
            <div>
                {
                    categories.map((category)=>
                    <button  key={category} className="btn btn-danger mb-2 d-block w-25">{category}</button>)
                }
            </div>
            <select>
                {
                    categories.map((category)=>
                    <option  key={category}>{category}</option>
                    )
                }
            </select>
            <ol>
                {
                    categories.map((category)=>
                    <li  key={category}>{category}</li>)
                }
            </ol>
            <ul className="list-unstyled">
                {
                    categories.map((category)=>
                    <li  key={category}><input type="checkbox"/>{category}
                    </li>
                    )
                }
            </ul>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>categories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category)=>
                        <tr  key={category}>
                            <td>
                            {category}
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}