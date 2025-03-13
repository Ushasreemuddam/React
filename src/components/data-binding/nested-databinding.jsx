export function NestedBinding(){
    var menu=[
        {Category:"Electronics",Product:["Mobiles","Television"]},
        {Category:"Footwear",Product:["Casuals","Boots"]}
    ]
    return(
        <div>
            <h2>Menu</h2>
            <ol>
                {
                    menu.map((item)=>
                    <li key={item.Category}>{item.Category}
                    <ul>
                        {
                            item.Product.map((product)=>
                            <li key={product}>{product}</li>
                            )
                        }
                    </ul>
                    </li>
                    )
                }
            </ol>
            <hr/>
            <select>
                {
                    menu.map((item)=>
                    <optgroup label={item.Category}>
                        {
                            item.Product.map((product)=>
                            <option>{product}</option>
                            )
                        }
                    </optgroup>
                    )
                }
            </select>
        </div>
    )
}