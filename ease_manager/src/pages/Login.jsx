import React ,{useState,useContext} from 'react';
import {Link,useNavigate} from "react-router-dom"
import {Button,Alert,Spinner} from "flowbite-react"
import { useDispatch,useSelector} from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
// import { DataContext } from '../Datacontext';
export default function Login() {
  // const { data,setData } = useContext(DataContext);
  const [formData,setFormData]=useState({});
  const dispatch=useDispatch()
  const {loading,error:errorMessage}=useSelector((state) => state.user)  
  const navigate=useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(!formData.rollnum || !formData.password){
      return dispatch(signInFailure("Please fill out all fields"))
    }
    try{
     dispatch(signInStart())
     const res=await fetch('/api/signin',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formData)
    });
    const data=await res.json();
    if(data.success==false){
     dispatch(signInFailure(data.message))
    }
    
    if(res.ok){
      // setData(data);
      dispatch(signInSuccess(data));
      navigate('/dashboard')
    }
  }
  catch(err){
    dispatch(signInFailure(err.message))
  }
  }
  const handleChange=(e)=>{
    
    setFormData({...formData,[e.target.id]:e.target.value})
   
  }

  // console.log(formData)
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center bg-white text-center">
        <h2 className="text-3xl font-bold mt-8 ml-44">Welcome!</h2>
        <h3 className="text-2xl mt-1 ml-44">Login to your account</h3>
        <img src="./src/images/login_img.png" alt="login_img" className="max-w-full h-auto mt-5 ml-44" />
      </div>

      <form className="w-1/2 flex items-center justify-center" onSubmit={handleSubmit}>
        <div className="border border-gray-200 p-12 mx-16 h-96 flex flex-col items-center justify-center shadow-md w-96">
          <div className="flex items-center justify-center mb-5">
            <img src="./src/images/PSG_img.png" alt="pst_img" className="w-12 h-auto mr-2" />
            <h1 className="text-xl text-darkblue font-bold m-0">PSG INSTITUTION</h1>
          </div>
          
          <div className="flex flex-col w-full mb-2 pt-4">
            <h3 className="text-black font-bold">Roll num</h3>
            <input type="text" id="rollnum" className="p-1 w-full border border-gray-300 rounded mt-1 box-border" onChange={handleChange} />
          </div>
          
          <div className="flex flex-col w-full mb-2 pt-4">
            <h3 className="text-black font-bold">Password</h3>
            <input type="text" id="password" className="p-1 w-full border border-gray-300 rounded mt-1 box-border" onChange={handleChange} />
          </div>
          
          <div className="flex   mt-2">
            {/* <p className="text-black cursor-pointer text-sm">Forgot Password?</p> */}
            <Button type='submit' className="bg-darkblue  text-white py-1 px-5 border-none rounded cursor-pointer text-lg transition-colors duration-300 bg-blue-900" disabled={loading}>
            {
                loading?(
                  <>
                  <Spinner size='sm'/>
                  <span className=''>Loading...</span>
                  </>
                )
                :"Login"
              }
            </Button>
          </div>
          {
            errorMessage  && (
              <Alert className='mt-5 w-full rounded-none' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
        
      </form>
    
    </div>

  );
}
