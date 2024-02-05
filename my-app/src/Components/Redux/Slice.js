import {createSlice} from "@reduxjs/toolkit"
import {TotalDatas} from "./TotalDatas"

const initialState ={

  TotalDatas,
  page : null,
  selectedItem : null,
  selectedNonVegItem : null,
  search : "",
  cartItems : [],
  orderPlacedItems : [],
  delevieryItems : [],
  searchResult : [],
  loginUserName : "",
  loginPassword : "",
  registerUserName : "",
  registerEmail : "",
  registerPhoneNumber : "",
  registerPassword : "",
  registerConfirmPassword : "",
  delevieryName : "",
  delevieryPhoneNumber : "",
  delevieryAddress : ""

}

const swiggySlice = createSlice({

    name : "food",
    initialState,
    reducers : {
      setPage:(state, action={})=>{
        state.page = action.payload
      },
      setSelectedItem : (state , action = {}) => {
        state.selectedItem = action.payload
      },
      setSelectedNonVegItem : (state , action = {}) => {
        state.selectedNonVegItem = action.payload
      },
      setCartItems : (state , action = {}) =>{
        state.cartItems = action.payload
      },
      setOrderPlacedItems : (state , action = {}) => {
        state.orderPlacedItems = action.payload
      },
      setDelevieryItems : (state , action = {}) => {
        state.delevieryItems = action.payload
      },
      setSearchResult : (state , action = {}) =>{
        state.searchResult = action.payload
      },
      setSearch : (state , action = {}) => {
        state.search = action.payload
      },
      setRegisterUserName : (state , action = {}) => {
        state.registerUserName = action.payload
      },
      setRegisterEmail : (state , action = {}) => {
        state.registerEmail = action.payload
      },
      setRegisterPhoneNumber : (state , action = {}) => {
        state.registerPhoneNumber = action.payload
      },
      setRegisterPassword : (state , action = {}) => {
        state.registerPassword = action.payload
      },
      setRegisterConfirmPassword : (state , action = {}) => {
        state.registerConfirmPassword = action.payload
      },
      setLoginUserName : (state , action = {}) => {
        state.loginUserName = action.payload
      },
      setLoginPassword : (state , action = {}) => {
        state.loginPassword = action.payload
      },
      setDelevieryName : (state , action = {} ) => {
        state.delevieryName = action.payload
      },
      setDelevieryPhoneNumber : (state , action = {}) => {
        state.delevieryPhoneNumber = action.payload
      },
      setDelevieryAddress : (state , action = {} ) => {
        state.delevieryAddress = action.payload
      }   

    }
})

export const { setPage , setSelectedItem , setCartItems , setOrderPlacedItems, setDelevieryItems , setSearchResult,setSearch,setRegisterUserName,setRegisterEmail,setRegisterPhoneNumber,setRegisterPassword,setRegisterConfirmPassword , setLoginUserName,setLoginPassword , setDelevieryName , setDelevieryPhoneNumber , setDelevieryAddress } = swiggySlice.actions
export default swiggySlice.reducer;