import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { actions } from '../store/HandleInput';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from "react-hook-form"

const BasicDetails = () => {
  const dispatch = useDispatch();
  const [email,setEmail]=useState();
  const [dob,setDob]=useState();
  const [contact,setContact]=useState();
  function handlename(e) {
    dispatch(actions.handleName(e.target.value))
  }
  function handlemail(e) {
    dispatch(actions.handleEmail(e.target.value))
  }
  function handledob(e) {
    dispatch(actions.handleDob(e.target.value))
  }
  function handlecontact(e) {
    dispatch(actions.handleContact(e.target.value))
  }
  return (
    <div className='total-basic-details'>
    <div className='BasicDetails'>
      <div className='basicDetails-elements sp'>
        <label className="input-labels">
          <div>
            Name*
          </div>
      <input onChange={handlename} className='input-elements sp' type='text' placeholder='Enter your full name'required/>
        </label>
      </div>
      <div className='basicDetails-elements sp'>
        <label className="input-labels">
          <div>

          Email*          
          </div>
        <input className='input-elements sp' type='email' placeholder='Example - userid@gmail.com' onChange={handlemail} required/>
        </label>
      </div>
      <div className='basicDetails-elements sp'>
        <label className="input-labels">
          <div>
          Date of Birth
          </div>
          <div>
            
        <input className='input-elements' type='date' id='dob' onChange={handledob}/>
          </div>
        </label>
      </div>
      <div className='basicDetails-elements sp'>
        <label className="input-labels">
          <div>
          Contact no

          </div>
        <input className='input-elements sp' type='number' placeholder='Enter your 10 digit Contact no.' onChange={handlecontact}/>
        </label>
      </div>
    </div>
    {/* <footer>
    <Link to={'/DocumentCollection'}>
        <button className='next-page-btn'>
        NEXT
        </button>
        </Link>
    </footer> */}
    </div>
  )
}

export default BasicDetails