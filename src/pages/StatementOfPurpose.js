import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '../store/HandleInput'
const StatementOfPurpose = () => {
  const dispatch=useDispatch();
  return (
    <div className='StatementOfPurpose-Container'>

    <div className='StatementOfPurpose'>
      <div className='SOP-input-field'>

      <label className='SOP-label'>
        <div className='sop-text'>1. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?</div>
      </label>
        <textarea className='SOP-input' maxLength={300} onChange={(e)=>{
          dispatch(actions.handleaboutyou1(e.target.value));
        }}/>
      </div>
      <div className='SOP-input-field'>

      <label className='SOP-label'>
        <div className='sop-text'>2. Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?</div>
      </label>
      <textarea className='SOP-input' maxLength={300} onChange={(e)=>{
          dispatch(actions.handleaboutyou2(e.target.value));
        }}/>
      </div>
      <div className='SOP-input-field'>

      <label className='SOP-label'>
        <div className='sop-text'>2.  What are the three things that are most important to you in a job?</div>
      </label>
      <textarea className='SOP-input' maxLength={300} onChange={(e)=>{
          dispatch(actions.handleaboutyou3(e.target.value));
        }}/>
      </div>
    </div>
    {/* <footer>
    <Link to={'/InterviewAvailability'}>
        <button className='next-page-btn'>
        NEXT
        </button>
        </Link>
    </footer> */}
    </div>
  )
}

export default StatementOfPurpose