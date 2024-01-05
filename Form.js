
import './form-open.css';
import "./form-close.css";
import axios from 'axios';
import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

import { useState } from 'react';

function Form() {
  const [show, setShow] = useState(true)
  const [close, setClose] = useState(true)
    
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [email, setEmail] = useState('')

    

     


       function Visible (){
         setClose(!close)
         setShow(!show)
         setName('')
         setFamily('')
         setEmail('')
       }
       function Hide (){
        setClose(!close)
        setShow(!show)
       
       }


       const HandleSubmit = async(e) => {
        console.log('heloo');
       e.preventDefault();     
       try{
        await axios.post('http://localhost:8000/api/Form', {
         name : name,
         family : family,
         email : email,
 
         } )}
 
        
      
      
      catch(err){
           console.log('err is',err);
         
 
       }
     }
      

 
    if (close == true) {
     
 

              return(
                 <div className='main-container'>
  <div className='container'>
  
  <div className="form-popup" id="myForm">
    <form onSubmit={HandleSubmit}   className="form-container">
     
      <label ><b>نام</b></label>
      <input type="text" 
      placeholder='نام خودرا وارد کنید' 
      className='inp' value={name} onChange={(e) => setName(e.target.value)}   />
      
  
      <label ><b>نام خانوادگی</b></label>
      <input type="text" className='inp' 
      placeholder='نام خانوادگی خودرا وارد کنید'
       name="family" value={family} onChange={(e) => setFamily(e.target.value)}   />
      
      <label ><b>ایمیل</b></label>
      
      <input type="text" className='inp' 
      placeholder='ایمیل خودرا وارد کنید' 
      name="email" value={email}  onChange={(e) => setEmail(e.target.value)} />

 <input type='submit'  className='btn' value= "SUBMIT"  onClick={Visible} /> 

      </form>

      </div>

      </div>

      </div>


      )}
          
    else if(show == !true) {
      
       return(
        <div className="pop" id="popupMenu">
              
        <h2>ممنون</h2>
        <p>  اطلاعات شما باموفقیت ثبت شد </p>
       
        <button type="submit" className="btn2" onClick={Hide}   >تایید</button>
    </div>
       )
       
      
       
  
      
      }     
      
     
}
   
export default Form;






