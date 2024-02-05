import React from "react";
import "./ProfilePage.css";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import {useNavigate} from "react-router-dom"
import { format, addDays, addHours } from 'date-fns';
import { Button, Input,message,Modal } from "antd";
import {setRegisterUserName,setRegisterEmail,setRegisterPhoneNumber} from "../Redux/Slice"

function ProfilePage() {

  const dispatch = useDispatch()

  const page = useNavigate()

  const [isModalOpen , setIsModalOpen] = useState(false)

  const [selectedSection, setSelectedSection] = useState("profile");

  const currentDate = new Date();
const oneHourLater = addHours(currentDate, 1);

const formattedTime = format(oneHourLater, 'hh:mm:ss a');

  const orderPlacedItems = useSelector((i) => i.food.orderPlacedItems);

  const delevieryName = useSelector((i)=>i.food.delevieryName)

  function openModal(e){
    e.preventDefault()
    setIsModalOpen(true)
  }

  const delevieryPhoneNumber = useSelector((i)=>i.food.delevieryPhoneNumber)
  
  const delevieryAddress = useSelector((i)=>i.food.delevieryAddress)
  console.log(delevieryPhoneNumber)


  const registerUserName = useSelector((i)=> i.food.registerUserName)

  const registerEmail = useSelector((i)=> i.food.registerEmail)

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  function exit(){
    page("/")
  }

  const registerPhoneNumber = useSelector((i)=> i.food.registerPhoneNumber)

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  let delevieryItemsTotalPrice = 0

    orderPlacedItems.forEach( (obj) => {

      delevieryItemsTotalPrice += obj.totalPrice
    })

   

  const [tempUserName, setTempUserName] = useState(registerUserName);
  const [tempEmail, setTempEmail] = useState(registerEmail);
  const [tempPhoneNumber, setTempPhoneNumber] = useState(registerPhoneNumber);
  const [isEditMode, setIsEditMode] = useState(false);

  function handleEditProfile (){
    setIsEditMode(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirmChanges = () => {
      
    if (tempUserName.length >= 4 && tempPhoneNumber.length === 10 && isValidEmail(tempEmail)) {
      dispatch(setRegisterUserName(tempUserName));
      dispatch(setRegisterEmail(tempEmail));
      dispatch(setRegisterPhoneNumber(tempPhoneNumber));
      message.success('Changes confirmed successfully');
      setIsEditMode(false);
      setIsModalOpen(false);
    } else {
      message.error('Please enter valid information');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

 

  const renderSwitch = () => {
    switch (selectedSection) {
      case "profile":
        return (
          
          <>

            <Modal
              title="Modal"
              open={open}
              onOk={exit}
              onCancel={hideModal}
              okText="Exit"
              cancelText="No"
              >
              <h4 style={{color:"red",textAlign:"center"}}>Are You Sure ? You want to Exit</h4>
            </Modal>       
            <Button className="editBtn" onClick={()=>{handleEditProfile()}}>EDIT PROFILE</Button>
            <Button className="logoutBtn" onClick={()=>{showModal()}}>Log Out</Button>
            <form className="formContainer" action="">
                <label>
                  UserName
                  <br/><br/>
                  <Input
                    onChange={(e) => setTempUserName(e.target.value)}
                    className="inputBox"
                    value={tempUserName}
                    disabled={!isEditMode} 
                  />
                  <div style={{color:"red",textAlign:"center",fontSize:"12px"}}>
                    {tempUserName.length < 4 && 'User Name should contain at least 4 characters'}
                  </div>
                </label>
                <br/>
                <label>
                  Email
                  <br/><br/>
                  <Input
                    onChange={(e) => setTempEmail(e.target.value)}
                    className="inputBox"
                    value={tempEmail}
                    disabled={!isEditMode}                   />
                  <div style={{color:"red",textAlign:"center",fontSize:"12px"}}>
                    {!isValidEmail(tempEmail) && 'Please Enter a valid Email'}
                  </div>
                </label>
                <br/>
                <label>
                  Phone Number
                  <br/><br/>
                  <Input
                    onChange={(e) => setTempPhoneNumber(e.target.value)}
                    className="inputBox"
                    value={tempPhoneNumber}
                    disabled={!isEditMode} 
                  />
                  <div style={{color:"red",textAlign:"center",fontSize:"12px"}}>
                    {tempPhoneNumber.length !== 10 && 'Phone number must contain 10 digits'}
                  </div>
                </label>
                <br/><br/>
                <button className="confrmChangesBtn" onClick={(e)=>{openModal(e)}}>Confirm Changes</button>
              </form>

              <Modal title="Basic Modal" open={isModalOpen} onOk={()=>{handleConfirmChanges()}}
                onCancel= {handleCancel}>

                  <br/>
                  <h4 >Are You Sure ? You want to Make Changes</h4>
                  <br/>

              </Modal>
          </>

          );
      case "Orders":
        return (
          <>

          {
            orderPlacedItems.length === 0 ? (

              <>
               <img src="https://marketplaceleader.wawbizstores.com/assets/images/no_order1.png" alt="" style={{marginLeft:"30px",marginTop:"30px"}} height={450} width={850} />
               <div>
               <Button onClick={()=>{page("/dishes")}} style={{backgroundColor:"blue",color:"white",height:"40px",width:"100px",borderRadius:"5px",position:"absolute",top:"250px",right:"100px"}}>Order Now</Button> 
               </div>
              </>
            ) : (

              <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"100px"}}>

          <div style={{width:"300px",overflow:"auto"}} >
            <div style={{fontWeight:"700",fontSize:"16px"}}>Deleviery Time : {formattedTime}</div>
            <br></br>
            <div style={{fontWeight:"700",fontSize:"16px"}}>Name : {delevieryName}</div>
            <br></br>
            <div style={{fontWeight:"700",fontSize:"16px"}}>Phone Number : {delevieryPhoneNumber}</div><br></br>
            <div style={{fontWeight:"700",fontSize:"16px"}}>Address : <span>{delevieryAddress}</span></div>
          </div>

          <div style={{display:"flex",border:"0.1px solid black",padding:"15px",maxWidth:"600px",textAlign:"center",gap:"20px",overflow:"auto",width:"fit-content"}}>
          {           
            orderPlacedItems && orderPlacedItems.map((e)=>{
              
              return(
                <>
                  <div  style={{display:"flex",justifyContent:"space-around",    alignItems:"center"}} >
                    <div>
                      {/* <div>Deleviery Items : {orderPlacedItems.length}</div> */}
                      <div><img src={e.image} height={100} width={100}/></div>
                      <br></br>
                      <div style={{fontWeight:"700",fontSize:"16px"}}>{e.tittle}</div>
                      <div style={{fontWeight:"700",fontSize:"16px"}}>Quantity * {e.quantity}</div>
                      <div style={{fontWeight:"700",fontSize:"16px"}}>Price = {e.totalPrice}</div>
                    </div>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>
          )
          }
        {/* <div style={{marginTop:"20px",marginLeft:"500px",fontWeight:"700",fontSize:"18px"}}>Total Price = {delevieryItemsTotalPrice} Rupees</div> */}

         </>

        );
      default:
        return null;
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="pageBody">
        <div style={{position:"absolute",marginLeft:"30px",marginTop:"40px",color:"white"}}>
          <h3>{registerUserName}</h3>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <h6>{registerPhoneNumber}</h6> <b>.</b> <h6>{registerEmail}</h6>
          </div>
        </div>
        <div className="prfileContainer">
        
          <div className="profile_left">
            <hr></hr>
            <div onClick={() => handleSectionClick("profile")} className={`sdiv ${selectedSection === 'profile' ? 'active-link' : ''}`}>
              <b className="sdiv">Profile</b>
            </div>
            <hr></hr>
            <div onClick={() => handleSectionClick("Orders")} className={`sdiv ${selectedSection === 'Orders' ? 'active-link' : ''}`}>
              <b className="sdiv"> Orders</b>
            </div>
            <hr></hr>
          </div>
          <div className="profile_right">{renderSwitch()}</div>
        </div>
      </div>

      

    </>
  );
}

export default ProfilePage;

