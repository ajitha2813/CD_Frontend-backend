import React ,{useState} from "react";
import "./Table.css";
import { useLoaderData, useLocation } from "react-router-dom";

const Table=()=>{
    const location = useLocation();
    const data = location.state.data;
    // const initState = [
    //     { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
    //     { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
    //     { id: 3, name: "water", quantitiy: 10, location: "fridge" }
    //   ];
    //   const [state, setState] = useState(data);
    console.log('data',data)
    
return(
    <table>
        <thead>
<tr key={"header"}>

        <th>id</th>
        <th>name</th>
        <th>quantitiy</th>
        <th>location</th>
            
</tr>
        </thead>
<tbody>
   {data.map((item)=>(
    <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.quantitiy}</td>
    <td>{item.location}</td>
    
    </tr>
   ))}
</tbody>
    </table>

);
}
export default Table