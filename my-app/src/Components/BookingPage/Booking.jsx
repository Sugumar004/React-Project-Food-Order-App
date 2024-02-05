import React, { useEffect,useState } from "react";
import "./Booking.css";
import { IoBicycleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Button , Drawer , Switch ,notification, Space ,  message} from "antd";
import { useSelector,useDispatch } from "react-redux"
import {setCartItems} from "../Redux/Slice"
import NavBar from "../NavBar/NavBar";

function BookingPage(){

    const selectedItem = useSelector((i)=>i.food.selectedItem)

    const cartItems = useSelector((i)=>i.food.cartItems)

    const dispatch = useDispatch()
  
    // console.log(selectedItem)

    function addToCart(selectedItem) {
      const existingItem = cartItems.find(item => item.tittle === selectedItem.tittle);    
      if (existingItem) {
        const updatedCartItems = cartItems.map(item => {
          if (item.tittle === selectedItem.tittle) {
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
      } else {
        const cartItemProduct = {
        
          tittle: selectedItem.tittle,
          heading: selectedItem.heading,
          image: selectedItem.image,
          itemQuantity: selectedItem.quantity,
          price: selectedItem.price,
          quantity: 1,
          totalPrice: selectedItem.price 
        };
        dispatch(setCartItems([...cartItems, cartItemProduct]));
      }
    }
   
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
      const key = `open${Date.now()}`;
      const btn = (
        <Space >
          <Button style={{backgroundColor:"#1AB64F",color:"white"}} size="small" onClick={() => api.destroy()}>
            Okay
          </Button>
          
        </Space>
      );
      api.open({
        message: 'Congratulations',
        description:
          'Item Added To Orders Sucessfully',
        btn,
        key,
      
      });
    };
    

    if(cartItems.length >=1){
      openNotification()
    }

    console.log(cartItems)

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    return(
        <>
        <NavBar></NavBar>
        {contextHolder}
        
        {/* <Switch defaultChecked onChange={onChange} />; */}
        <div class="booking_container">
    <div class="container_booking">
        <div class="div1">
        
            <div>
                <h3>{selectedItem && selectedItem.heading}</h3>
            </div>
            <div>{selectedItem && selectedItem.description}</div>
        </div>
        <div class="div2">
            <img style={{height:"100px",width:"100px"}} src={selectedItem && selectedItem.image} class="item-image" />
            <div>{selectedItem && selectedItem.quantity}</div>
            <div class="rating-section">
                <FaStar className="staricon" />
                <span className="starSpan"><b>{selectedItem && selectedItem.ratings}</b></span>
            </div>
        </div>
    </div>
    
    <div class="offer-section">
        <div><del class="offer-text">10 % Offer </del></div>
        <div><a>| 30 % Offer</a></div>
    </div>
    <hr />
    <div class="additional-info">
        <div class="delivery-section">
            <IoBicycleSharp style={{marginTop:"-15px",fontSize:"20px"}} />
            <p class="delivery-text"><a>| Cash on Delivery Available</a></p>
        </div>
        <div class="price-section">
    <button onClick={()=>{addToCart(selectedItem)}} style={{backgroundColor:"#1AB64F",color:"white",height:"35px",width:"100px",border:"1px solid white",borderRadius:"5px"}}>A D D</button>
        </div>
    </div>
    <hr></hr>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div></div>
        <div class="price-text">₹ {selectedItem && selectedItem.price} Rupees</div>
      </div>
    </div>
    </>
    )

}

export default BookingPage




