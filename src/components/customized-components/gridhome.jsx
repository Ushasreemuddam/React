import {GridComponent} from '../customized-components/grid';
import { useState } from 'react';
export function GridHome(){

    const[details,setDetails]=useState([{'Product':'Sumsung Tv','Cost':'34550.23'},{'Product':'Mobile','Cost':'4578.90'}])

    return(
        <div className="container-fluid">
            
            < GridComponent heading="Employee Table" fields={["First Name","Last Name","Salary"]} data={[{'First Name':'Usha','Last Name':'Muddam','Salary':'45000.23'},{'First Name':'Sindhu','Last Name':'Tokala','Salary':'55000.23'}]}/>
            <hr/>
            <GridComponent heading="Student Details" fields={["FirstName","LastName"]} data={[{'FirstName':'Usha','LastName':'Muddam'}]}/>
            <hr/>
            <GridComponent heading="Product Details" fields={["Product","Cost"]} data={details}/>
        </div>
    )
}