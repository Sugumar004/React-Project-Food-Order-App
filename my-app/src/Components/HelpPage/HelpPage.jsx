
import React, { useState } from "react";
import "./HelpPage.css";


import { Collapse } from 'antd';
import { FaTachographDigital } from "react-icons/fa6";
import NavBar from "../NavBar/NavBar";

function HelpPage(){

  const [helpName , setHelpName] = useState("")
  const [ helpEmail , setHelpEmail] = useState("")
  const [helpMessahe , setHelpMessage] = useState("")


  function formHelpSubmit(e){

    setHelpName("")
    setHelpEmail("")
    setHelpMessage("")
    e.preventDefault()
  }

    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;
    const items = [
      {
        key: '1',
        size:"large",
        label: 'What is Swiggy Customer Care Number',
        children: <p style={{color:"black"}}>{text}</p>,
      },
      {
        key: '2',
        size:"large",
        label: 'I am unable to find the restarunt looking for ',
        children: <p style={{color:"black"}}>{text}</p>,
      },
      {
        key: '3',
        size:"large",
        label: 'I See surgee fees on app',
        children: <p style={{color:"black"}}>{text}</p>,
      },
      {
        key: '4',
        size:"large",
        label: 'i am unable to place a cash on deleviery order',
        children: <p style={{color:"black"}}>{text}</p>,
      },
       {
        key: '5',
        size:"large",
        label: 'I did not receive my OTP on SMS ',
        children: <p style={{color:"black"}}>{text}</p>,
      },
      {
        key: '6',
        size:"large",
        label: 'I have have an question Related coupon',
        children: <p style={{color:"black"}}>{text}</p>,
      },
      {
        key: '7',
        size:"large",
        label: 'I want to unsubscribe my swiggy account',
        children: <p style={{color:"black"}}>{text}</p>,
      },
      {
        key: '8',
        size:"large",
        label: 'I was Charged a cancellation Fees',
        children: <p style={{color:"black"}}>{text}</p>,
      }
    ];

    const secondText = `Swiggy One Free delivery is applicable on ALL food delivery restaurants within 10 kms from your location except Dominos. 
    You are also eligible for member-only extra discounts of up to 30%  `;
 
  const faq = [
    {
      key: '1',
      size:"large",
      label: 'Are swiggy one benefits available at all restarunts',
      children: <p style={{color:"black"}}>{secondText}</p>,
    },
    {
      key: '2',
      size:"large",
      label: 'Is there a limit on freee delevires or extra discount ',
      children: <p style={{color:"black"}}>{secondText}</p>,
    },
    {
      key: '3',
      size:"large",
      label: 'Is extra discount applicable on items total',
      children: <p style={{color:"black"}}>{secondText}</p>,
    },
    {
      key: '4',
      size:"large",
      label: 'What all  charges will be covered under free deleviery',
      children: <p style={{color:"black"}}>{secondText}</p>,
    },
     {
      key: '5',
      size:"large",
      label: 'How can I renew my membership',
      children: <p style={{color:"black"}}>{secondText}</p>,
    },
    {
      key: '6',
      size:"large",
      label: 'Is swiggy one available in all cities',
      children: <p style={{color:"black"}}>{secondText}</p>,
    },
    {
      key: '7',
      size:"large",
      label: 'Can I cancel or Pause my Membership',
      children: <p style={{color:"black"}}>{secondText}</p>,
    },
    {
      key: '8',
      size:"large",
      label: 'What is Swiggy dineout',
      children: <p style={{color:"black"}}>{secondText}</p>,
    }
  ];

  const thirdText = `FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed   `;

const partner = [
  {
    key: '1',
    size:"large",
    label: 'What are the major documents needed for partner Onboarding',
    children: <p style={{color:"black"}}>{thirdText}</p>,
  },
  {
    key: '2',
    size:"large",
    label: 'What should i contact if i need Onboarding',
    children: <p style={{color:"black"}}>{thirdText}</p>,
  },
  {
    key: '3',
    size:"large",
    label: 'How much commision will be charged by Swiggy',
    children: <p style={{color:"black"}}>{thirdText}</p>,
  },
  {
    key: '4',
    size:"large",
    label: 'I dont have an FSSAI liscence . Can i still be OnBoard',
    children: <p style={{color:"black"}}>{thirdText}</p>,
  },
   {
    key: '5',
    size:"large",
    label: 'What are the latest changes on Swiggy Money',
    children: <p style={{color:"black"}}>{thirdText}</p>,
  },
  {
    key: '6',
    size:"large",
    label: 'Where can i use Swiggy Money Balance',
    children: <p style={{color:"black"}}>{thirdText}</p>,
  },
  {
    key: '7',
    size:"large",
    label: 'My payment was debuted But the order is not Processed',
    children: <p style={{color:"black"}}>{thirdText}</p>,
  },
  {
    key: '8',
    size:"large",
    label: 'I want to inovoice for my Order',
    children: <p style={{color:"black"}}>{thirdText}</p>,
  }
];



const [selectedSection, setSelectedSection] = useState("general");

const handleSectionClick = (section) => {
  setSelectedSection(section);
};

const renderContent = () => {
    switch (selectedSection) {
      case "general":
        return (
          <div>
            <Collapse accordion style={{color:'black',marginTop:"25px"}} items={items}/>
                        
                       
          </div>
        );
      case "faq":
        return (
          <div>
            <Collapse accordion style={{color:'black',marginTop:"25px"}} items={faq}/>
          </div>
        );
      case "partner":
        return (
          <div>
            <Collapse accordion style={{color:'black',marginTop:"25px"}} items={partner}/>
          </div>
        );
      case "needHelp":
        return (
          <div className="form-container">
                <form className="form">
                    <label htmlFor="name">Name</label>
                    <input onChange={(e)=>{setHelpName(e.target.value)}} type="text" id="name" name="name" placeholder="Your name" required="required" />

                    <label htmlFor="email">Email</label>
                    <input  onChange={(e)=>{setHelpEmail(e.target.value)}} type="email" id="email" name="email" placeholder="Your email" required="required" />
                    <label htmlFor="message">Message</label>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <textarea  onChange={(e)=>{setHelpMessage(e.target.value)}} id="message" name="message" placeholder="Your message" required="required"></textarea>
                    </div>
                    <br></br>
                    <button onClick={(e)=>{formHelpSubmit(e)}}   type="submit" className="send-button">
                     Send
                     </button>
                </form>
           
          </div>
        );
      default:
        return null;
    }
  };

  

    return(
        <>
        <NavBar></NavBar>
        <div style={{height:"100vh",width:"100%",backgroundColor:"#37718E",color:"white"}} className="pageDiv">

            <h1 style={{padding:"15px",marginLeft:"20px"}}>Help & Support</h1>
            
            
            <div className="contentDiv">

                <div className="lftside">
                    <hr></hr>
                    <div onClick={() => handleSectionClick("general")} className={`cdiv ${selectedSection === 'general' ? 'active-link' : ''}`}><b className="cdiv">General issues</b></div>
                    <hr></hr>
                    <div onClick={() => handleSectionClick("faq")} className={`cdiv ${selectedSection === 'faq' ? 'active-link' : ''}`}><b className="cdiv" >FAQs</b></div>
                    <hr></hr>
                    <div onClick={() => handleSectionClick("partner")} className={`cdiv ${selectedSection === 'partner' ? 'active-link' : ''}`}><b className="cdiv">Partner ONboarding</b></div>
                    <hr></hr>
                    <div onClick={() => handleSectionClick("needHelp")} className={`cdiv ${selectedSection === 'needHelp' ? 'active-link' : ''}`}><b className="cdiv">Need a Help ?</b> </div>
                    <hr></hr>
                </div>
                <div className="rightside">

                 {renderContent()}

                </div>

            </div>

        </div>
        </>
    )
}

export default HelpPage;

