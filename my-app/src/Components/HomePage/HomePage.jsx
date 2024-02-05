import React, { useState } from "react";
import "./HomePage.css";
import { Button, Rate,Modal, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {setSelectedItem} from "../Redux/Slice"
import {useSelector,useDispatch} from "react-redux"
import { setSearchResult} from "../Redux/Slice"
import {setSearch} from "../Redux/Slice"
import NavBar from "../NavBar/NavBar";

function HomePage(){

  const dispatch = useDispatch();

  const routeBooking = useNavigate();

  const selectedItem = useSelector((i) => i.food.selectedItem);
  const searchResult = useSelector((i) => i.food.searchResult);
  const search = useSelector((i) => i.food.search);
  
  const [isNonVegVisible, setIsNonVegVisible] = useState(false);
  const handleSwitchChange = (checked) => {
    setIsNonVegVisible(checked);
  };

  const redux = useSelector((i)=> i.food)

  const [breakFastVeg , setBreakFastVeg] = useState(redux.TotalDatas.breakFastVeg)

  const [lunchVeg , setLunchVeg]=useState(redux.TotalDatas.lunchVeg)

  const [nonVegRecepie , setNonVegRecepie]=useState(redux.TotalDatas.nonVegRecepie)

  const [chickenRecepie , setChickenRecepie] = useState(redux.TotalDatas.chickenRecepie)

  const [fastFoodRecepie , setFastFoodRecepie] = useState(redux.TotalDatas.fastFoodRecepie)

  const [combinedArray , setCombinedArray]=useState([...breakFastVeg,...lunchVeg,...chickenRecepie,...fastFoodRecepie])

  useEffect(() => {
    const filteredResults = combinedArray.filter(
      (post) =>
        (post.ratings &&
          post.heading.toLowerCase().includes(search.toLowerCase())) ||
        (post.title &&
          post.title.toLowerCase().includes(search.toLowerCase()))
    );

    dispatch(setSearchResult(filteredResults));
  }, [combinedArray, search]);
 

    return(

        <>

        <NavBar></NavBar>

        <div className="search_div">
            {/* <input placeholder="Search Your Dishes" onChange={(e)=>{dispatch(setSearch(e.target.value))}} className="srchinput"></input> */}
        </div>

        <br></br><br></br>

        <div style={{marginLeft:"1000px"}}><b style={{color:"red"}}>Looking For NonVeg Recepies ?</b>  <Switch  onChange={handleSwitchChange} ></Switch></div>

        {isNonVegVisible && ( 
        <> 
          <h2 className="breakfast_h2">Non Veg Recipes !</h2>
          <div className="flex">
            {nonVegRecepie.map((b) => {
              return (
                <div className="pageContainer" key={b.id}>
                 <div className="container" onClick={()=>{routeBooking("/bookingpage"); dispatch(setSelectedItem(b))}}>
                        <img style={{borderRadius:"8px"}} src={b.image} height={220} width={250} /><br></br><br></br>
                        <div className="tittle"><h2>{b.tittle}</h2></div><br></br>
                        <div>{b.description}</div>
                        <div className="ratingFlex">
                            <div><Rate disabled  defaultValue={b.ratings} /></div>
                            <div><h3>{b.ratings}</h3></div>
                        </div>
                    </div>
                </div>
              );
            })}
          </div>
        </>
      )}

        <br></br>
        <div className="flex">
       
        { searchResult.map((b)=>{

            return(
                <>
                <div className="pageContainer">
                    <div className="container" onClick={()=>{routeBooking("/bookingpage"); dispatch(setSelectedItem(b))}}>
                        <img style={{borderRadius:"8px",marginLeft:"20px"}} src={b.image} height={220} width={250} /><br></br><br></br>
                        <div className="tittle"><h2>{b.tittle}</h2></div><br></br>
                        <div>{b.description}</div>
                        <div className="ratingFlex">
                            <div><Rate disabled  defaultValue={b.ratings} /></div>
                            <div><h3>{b.ratings}</h3></div>
                        </div>
                        
                    </div>
                </div>
                </>
            )
        })
        }
        </div>

        {/* <h2 className="breakfast_h2">Recomended For Lunch ...!</h2>
        <br></br>
        <div className="flex">
        { redux.TotalDatas.lunchVeg.map((l)=>{

            return(
                <>
                <div className="pageContainer">
                    <div className="container" onClick={()=>{routeBooking("/bookingpage"); dispatch(setSelectedItem(l))}}>
                        <img style={{borderRadius:"8px"}} src={l.image} height={220} width={250} /><br></br><br></br>
                        <div className="tittle"><h2>{l.tittle}</h2></div><br></br>
                        <div>{l.description}</div>
                        <div className="ratingFlex">
                            <div><Rate  defaultValue={l.ratings} /></div>
                            <div><h3>{l.ratings}</h3></div>
                        </div>
                        
                    </div>
                </div>
                </>
            )
        })
        }
        </div>

        <h2 className="breakfast_h2">Recomended For Dinner ...!</h2>
        <br></br>
        <div className="flex">
        { redux.TotalDatas.dinnerVeg.map((d)=>{

            return(
                <>
                <div className="pageContainer">
                    <div className="container" onClick={()=>{routeBooking("/bookingpage"); dispatch(setSelectedItem(d))}}>
                        <img style={{borderRadius:"8px"}} src={d.image} height={220} width={250} /><br></br><br></br>
                        <div className="tittle"><h2>{d.tittle}</h2></div><br></br>
                        <div>{d.description}</div>
                        <div className="ratingFlex">
                            <div><Rate  defaultValue={d.ratings} /></div>
                            <div><h3>{d.ratings}</h3></div>
                        </div>
                        
                    </div>
                </div>
                </>
            )
        })
        }
        </div> */}

        </>
    )   
}

export default HomePage;
