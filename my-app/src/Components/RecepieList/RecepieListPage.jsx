import React from "react";
import "./RecepieListPage.css"
import {Rate } from "antd"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import {setSelectedItem} from "../Redux/Slice"
import NavBar from "../NavBar/NavBar";


function RecepieListPage(){
    
    const dispatch = useDispatch()
    const selectedItem = useSelector((i)=>i.food.selectedItem)
    
    const routeBooking = useNavigate();

    const page = useSelector((i)=>i.food.page)

    return(
        <>
        <NavBar></NavBar>
        <h2 className="breakfast_h2"> Here is Some Recepies Reletated To You ...!</h2>
        <div className="flex">
            { page && page.map((r)=>{

            return(
                <>
                <div className="pageContainer">
                    <div className="container" onClick={ ()=>{dispatch(setSelectedItem(r));routeBooking("/bookingpage")}}>
                        <img style={{borderRadius:"8px"}} src={r.image} height={220} width={250} /><br></br><br></br>
                        <div className="tittle"><h2>{r.tittle}</h2></div><br></br>
                        <div>{r.description}</div>
                        <div className="ratingFlex">
                            <div><Rate allowHalf defaultValue={r.ratings} /></div>
                            <div><h3>{r.ratings}</h3></div>
                        </div>
                        
                    </div>
                </div>
                </>
            )
        })
        }
        </div>
     
        </>
    );
}

export default RecepieListPage;