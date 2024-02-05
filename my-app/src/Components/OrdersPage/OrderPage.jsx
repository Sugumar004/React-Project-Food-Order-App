import React from "react";
import "./OrderPage.css"
import { IoMdCart } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import {  Button, notification, Space , Input , Modal , Result } from "antd";
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import {setCartItems} from "../Redux/Slice"
import {setOrderPlacedItems} from "../Redux/Slice"
import {setDelevieryItems,setDelevieryName,setDelevieryPhoneNumber,setDelevieryAddress} from "../Redux/Slice"
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";


function OrderPage(){ 

  const page = useNavigate()

  const cartItems = useSelector((i)=>i.food.cartItems)
  
  const orderPlacedItems = useSelector((i)=> i.food.orderPlacedItems)

  const delevieryName = useSelector((i)=> i.food.delevieryName)

  const delevieryPhoneNumber = useSelector((i)=> i.food.delevieryPhoneNumber)

  const delevieryAddress = useSelector((i)=> i.food.delevieryAddress)

  
  const delevieryItems = useSelector((i)=>i.food.delevieryItems)
  console.log(delevieryItems)

  const dispatch = useDispatch()


     function increaseQuantity(tittle) {
      const updatedCartItems = cartItems.map(item => {
        if (item.tittle === tittle) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price
          };
        } else {
          return item;
        }
      });
      dispatch(setCartItems(updatedCartItems));
    }
  
    function decreaseQuantity(tittle) {
      const updatedCartItems = cartItems.map(item => {
        if (item.tittle === tittle && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: (item.quantity - 1) * item.price,
            
          };
        } else {
          return item;
        }
      });
      dispatch(setCartItems(updatedCartItems));
    }
  
    function removeFromCart(tittle) {
      const updatedCartItems = cartItems.filter(item => item.tittle !== tittle);
      dispatch(setCartItems(updatedCartItems));
    }

    function placeOrder(item){
      dispatch(setDelevieryItems([...delevieryItems, item]));
      dispatch(setOrderPlacedItems([]))
    }
 
      const [showResult, setShowResult] = useState(false);
    
      const showMessage = () => {
        setShowResult(true);
      };

      const closeMessage =() =>{
        setShowResult(false)
      }

      function confirmOrder() {
        if (
          delevieryName.length >= 4 &&
          delevieryPhoneNumber.length > 9 &&
          delevieryAddress.length >= 15 &&
          delevieryItems.length >= 1
        ) {
          dispatch(setOrderPlacedItems([...orderPlacedItems, ...delevieryItems]));
          dispatch(setDelevieryItems([]));
          showMessage();
        } else {
          
          if (delevieryName.length <= 4) {
            notification.error({
              message: "Error",
              description: "Name must be atleast 4 characters",
            });
          }
          if (delevieryPhoneNumber.length < 10) {
            notification.error({
              message: "Error",
              description: "Phone No must be 10 digits",
            });
          }
          if (delevieryAddress.length <= 15) {
            notification.error({
              message: "Error",
              description: "Enter a Valid Address",
            });
          }
          if (delevieryItems.length < 1) {
            notification.error({
              message: "Error",
              description: "Add items to your delivery",
            });
          }
        }
      }
      

    console.log(delevieryName)    
   
    const totalPrice = delevieryItems
    ? delevieryItems.reduce((acc, item) => acc + (item.price || 0), 0)
    : 0;

    let delevieryItemsTotalPrice = 0

    delevieryItems.forEach( (obj) => {

      delevieryItemsTotalPrice += obj.totalPrice
    })


    function clearCart(){
      dispatch(setCartItems([]))
    }

  

    return(
        <>

      <NavBar></NavBar>

      {showResult && (
        <Result
          status="success"
          title="Order Placed Sucessfully , Track Your Orders Now ! "
         
          extra={[
            <>
            <Button onClick={()=>{page("/profile")}}>View Order</Button>
            <Button onClick={()=>{closeMessage()}}>Ok</Button>
            </>

          ]}
        />
      )}
        
        <div style={{backgroundColor:"#E9ECEE"}}>
          

            <div style={{display:"flex",justifyContent:"space-around"}}>

                <div className="address">

                  <div className="orderImagDiv">
                    
                    {
                      delevieryItems && delevieryItems.map((i)=>{
                 
                        return(
                          <>
                          
                            <img src={i.image} height={90} width={90} alt="" />__
                                                       
                                                      
                          </>
                        )
                      })
                    }
                  </div>

                    {
                      delevieryItems.length >0 ? (

                        <div style={{position:"absolute",marginTop:"150px",marginLeft:"500px",padding:"5px"}}>
                        <h5>Total Price : {delevieryItemsTotalPrice}</h5>
                        <h5><a>Products : {delevieryItems.length}</a></h5>
                      </div>
                      ) : null
                    }
                 

                  <div className="delevieryDetailsDiv">
                  

                    <div style={{display:"flex",alignItems:"center",gap:"20px",marginLeft:"200px",marginTop:"20px"}}>
                      <ImLocation style={{height:"20px",width:"20px"}} />
                      <h4>Add Your Deleviery Details</h4> 
                    </div>
                    <div>
                      <div style={{marginLeft:"20px"}} >
                      Name  <br></br><input  style={{width:"350px"}} onChange={(e)=>{dispatch(setDelevieryName(e.target.value))}} required="required" className="input" type="text"></input>
                      <br></br><br></br>
                      Phone Number <br></br>  <input style={{width:"350px"}} onChange={(e)=>{dispatch(setDelevieryPhoneNumber(e.target.value))}} required="required" className="input" type="number"></input>
                      <br></br><br></br>
                      Address
                      <div style={{display:"flex",justifyContent:"space-around",alignItems:'center'}}>
                        
                        <input onChange={(e)=>{dispatch(setDelevieryAddress(e.target.value))}} required="required" className="textarea" type="textarea"></input>
                        <br></br><br></br>
                        <button onClick={()=>{confirmOrder()}} className="cnfrmbtn" type="submit">Confirm</button>
                      </div>
                      </div>
                    </div>
                      

                  </div>

                </div>
                <div className="cartLists">

                <div style={{padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div><h5> Cart Items <IoMdCart style={{fontSize:"25px"}} /> : <span style={{color:"#FC8019"}}>{cartItems.length}</span> </h5> </div>
                  <div>
                    {cartItems.length >0 ? ( <Button style={{backgroundColor:"red",color:"white"}} onClick={()=>{clearCart()}}>Clear Cart</Button>) : null  }
                   </div>
                </div>
                <hr></hr>
                <div>
                  {
                    cartItems.map((e)=>{
                      const money = e.price;
                      const count = e.quantity;
                      const totalamount = money * count
                     
                      return(
                        <>
                        <div style={{display:"flex",marginTop:"5px",justifyContent:"space-evenly",alignItems:"center",border:"0.1px solid lightgrey",padding:"5px",textAlign:"center"}}>
                          <div>
                            <div><img src={e.image} height={70} width={70} /></div>
                            <br></br>
                            <b>Price = {totalamount}</b>    
                          </div>
                          <div style={{display:"flex"}}>
                            <button onClick={() => decreaseQuantity(e.tittle)} style={{backgroundColor:"red",color:"white",height:"30px",width:"30px",borderRadius:"5px",border:"none",outline:"none"}}><b>-</b></button>
                            <br></br>
                            <input style={{width:"35px",border:"none",outline:"none",fontWeight:"700",textAlign:"center"}} type="text"  value={e.quantity} name="" id="" /><br></br>
                            <button onClick={() => increaseQuantity(e.tittle)} style={{backgroundColor:"lightgreen",height:"30px",width:"30px",borderRadius:"5px",border:"none",outline:"none"}}><b>+</b></button>
                          </div>
                          <div >

                            <MdDelete className="trashicon" onClick={() => removeFromCart(e.tittle)}  />
                            <Button onClick={()=>{placeOrder(e)}} style={{backgroundColor:"blue",color:"white"}}>Place Order</Button>

                           
                          </div>
                        </div>                        
                        </>
                      )
                    })
                  }
                  
                </div>   
                </div>
            </div>

        </div>
        </>
    )

}

export default OrderPage


