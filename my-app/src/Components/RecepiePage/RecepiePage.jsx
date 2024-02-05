import React, { useEffect, useState } from "react";
import "./RecepiePage.css";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../Redux/Slice' 
import NavBar from "../NavBar/NavBar";

function RecepiePage(){

    const dispatch = useDispatch()
    const routePage = useNavigate()

    
    
    const page = useSelector((i)=>i.food.page)
    const loginUserName = useSelector((i)=>i.food.loginUserName)

    const dosaRecepie = useSelector((i)=>i.food.TotalDatas.dosaRecepie)
    const parottaRecepie = useSelector((i)=>i.food.TotalDatas.parottaRecepie)
    const biriyaniRecepie = useSelector((i)=>i.food.TotalDatas.biriyaniRecepie)
    const chickenRecepie = useSelector((i)=>i.food.TotalDatas.chickenRecepie)
    const fastFoodRecepie = useSelector((i)=>i.food.TotalDatas.fastFoodRecepie)

   function dosa(){
    dispatch(setPage(dosaRecepie))
   }

   function poratto(){
    dispatch(setPage(parottaRecepie))
    
   }
   function biriyani(){
    dispatch(setPage(biriyaniRecepie))
    
   }
   function chicken(){
    dispatch(setPage(chickenRecepie))
    
   }
   function fastfood(){
    dispatch(setPage(fastFoodRecepie))
    
   }

    return(
        <>
        <NavBar></NavBar>
        <div className="container_recepiePage">
            <h3 style={{marginLeft:"80px",marginTop:"50px"}}>Best Offers For You</h3>
            <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around",marginTop:"20px"}}>
                <img onClick={()=>{fastfood();routePage('/recepelistpage')}} className="offrImage" style={{height:"300px",width:"450px"}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/3ab75a3a32fcdb221ac67d3cb5e493f6" alt="" />
                <img onClick={()=>{biriyani();routePage('/recepelistpage')}} className="offrImage" style={{height:"300px",width:"450px"}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/8bf3432bd87a546bf6d820270e91c602" alt="" />
            </div>
                <h3 style={{marginLeft:"80px",marginTop:"50px"}}>{loginUserName} , What's on your mind ?</h3>
            <div className="recepie_parent">
                <div onClick={()=>{dosa(); routePage('/recepelistpage')}} className="recepie_div"  >
                    <img src="https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg" style={{borderRadius:"50%"}}  height={150} width={150} alt=""/><br></br><br></br>
                    <h3>Dosa</h3>        
                </div>
                <div onClick={()=>{poratto();routePage('/recepelistpage')}} className="recepie_div">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoV0h5AWPbS-sWKbmmH_h0tXRo8C92h68Hw&usqp=CAU" style={{borderRadius:"50%"}} height={150} width={150} alt="" /><br></br><br></br>
                    <h3>Parotta</h3>        
                </div>
                <div onClick={()=>{biriyani();routePage('/recepelistpage')}} className="recepie_div">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNO238UES5bTWOiJIWnKde5NvlkWpYc9F-BV4nVBB3AaC9Cw3V6QJrdc9GRWBYep1qjV8&usqp=CAU" style={{borderRadius:"50%"}} height={150} width={150} alt="" /><br></br><br></br>
                    <h3>Biriyani</h3>        
                </div>
                <div onClick={()=>{chicken();routePage('/recepelistpage')}} className="recepie_div">
                    <img src="https://recipes.timesofindia.com/thumb/61589069.cms?width=1200&height=900" style={{borderRadius:"50%"}} height={150} width={150} alt="" /><br></br><br></br>
                    <h3>Chicken</h3>        
                </div>
                <div onClick={()=>{fastfood();routePage('/recepelistpage')}} className="recepie_div">
                    <img src="https://recipes.net/wp-content/uploads/2020/03/Fast-Food.jpg" height={150} width={150} style={{borderRadius:"50%"}} alt="" /><br></br><br></br>
                    <h3>Fast Food</h3>        
                </div>
            </div>    

        </div>
        <div style={{marginTop:"20px"}}><img width="100%" src="https://static.vecteezy.com/system/resources/previews/002/979/432/original/mobile-online-food-delivery-concept-delivery-package-vector.jpg" alt="" /></div>
        <br></br><br></br>
      <Footer></Footer>

        

        </>
    )
}

export default RecepiePage;