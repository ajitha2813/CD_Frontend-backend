import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "./Table";
import "./Cards.css"



const Cards = ({ keyo,data, onshowTable }) => {
// const navigate=useNavigate()

    return (
        //         <div>
        //         <div className="user_card">
        // <h1> {}</h1>
        //     <button onClick={()=><Table data={Table}/>}>click</button>
        // </div>

        // </div>
        <>
            {/* {data.map((e) => (<>
                <div className="card">
                    <p>Title: {e.title}</p>
                    <Link target="_blank" to={e.navigateTo}>Navigate</Link>
                </div>
            </>))} */}
            <div className="card">
                <p>{keyo}</p>
                <hr />
                <button onClick={()=> onshowTable(data)}>view</button>
            </div>

        </>
    )
}
export default Cards