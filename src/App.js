import './App.css';
import {Route,Routes} from 'react-router-dom'
import BasicDetails from './pages/BasicDetails';
import DocumentCollection from './pages/DocumentCollection';
import StatementOfPurpose from './pages/StatementOfPurpose';
import InterviewAvailability from './pages/InterviewAvailability';
import { useState } from 'react';
import SubmitPages from './pages/SubmitPages';
import { actions } from './store/HandleInput';
import { useDispatch } from 'react-redux';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';

function App() {
  const pageState= useSelector(state=>state.pageState)
  const dispatch=useDispatch();
  const sidepanel=useSelector(state=>state.sidepanel)
  useEffect(()=>{
    if(pageState==1){
      document.querySelector('#side-cont-2').className='side-container'
      document.querySelector('#side-cont-3').className='converted-side-container'
    }
    if(pageState==2){
      document.querySelector('#side-cont-3').className='side-container'
      document.querySelector('#side-cont-4').className='converted-side-container'
    }
    if(pageState==3){
      document.querySelector('#side-cont-4').className='side-container'
      document.querySelector('#side-cont-5').className='converted-side-container'
    }
    if(pageState==4){
      document.querySelector('#submit-form').className='dissapear-submit';
    }
  })
  function submitted(){
    console.log("form submitted")
  }
  // const pageState = 0;
  function pagechange(e){
    e.preventDefault();
    console.log(pageState)
    if(pageState==0){
      dispatch(actions.validationHandler(pageState));
    }
    if(pageState==1){
      dispatch(actions.validationHandler2(pageState));
    }
    if(pageState==2){
      dispatch(actions.validationHandler3(pageState));
    }    
  }
  function handlesubmit(e){
    e.preventDefault();
    console.log('form submitted')
    
    e.target.style.display='none';
  }
  const displayPage={
    0:<BasicDetails/>,
    1:<DocumentCollection/>,
    2:<StatementOfPurpose/>,
    3:<InterviewAvailability/>,
    4:<SubmitPages/>
  }
  return (
    <div className='App-container'>
      <div className='sidepanel'>
        <div className='side-container' id='side-cont-1'>
          <div className='side-container-inside-1'></div>
          <div className='side-container-inside-2'>
            <div className='side-container-inside-div-1'>New Form</div>
            <div className='side-container-inside-div-2'>Start creating a new form with the wide options of fields available</div>
          </div>
        </div>
        <div className='converted-side-container' id='side-cont-2'>
          <div className='side-container-inside-1'></div>
          <div className='side-container-inside-2'>
            <div className='side-container-inside-div-1'>Details Collection</div>
            <div className='side-container-inside-div-2'>Collect information from Candidates on their education, work experience, 
contact no,etc</div>
          </div>
        </div>
        <div className='side-container' id='side-cont-3'>
          <div className='side-container-inside-1'></div>
          <div className='side-container-inside-2'>
            <div className='side-container-inside-div-1'>Document Collection</div>
            <div className='side-container-inside-div-2'>Save time and efforts: Explore this template to find a set of questions required for document collection </div>
          </div>
        </div>
        <div className='side-container' id='side-cont-4'>
          <div className='side-container-inside-1'></div>
          <div className='side-container-inside-2'>
            <div className='side-container-inside-div-1'>Statement of Purpose</div>
            <div className='side-container-inside-div-2'>Start creating a new form with the wide options of fields available</div>
          </div>
        </div>
        <div className='side-container' id='side-cont-5'>
          <div className='side-container-inside-1'></div>
          <div className='side-container-inside-2'>
            <div className='side-container-inside-div-1'>Interview Availability </div>
            <div className='side-container-inside-div-2'>Start creating a new form with the wide options of fields available</div>
          </div>
        </div>
      </div>

    <div className="App">
      <div className='heading'>
        <div className='heading-lines' id='heading-line-1'>SELFASSESSOR EDUCATIONAL TECHNOLOGIES</div>
        <div className='heading-lines' id='heading-line-2'>This is a basic input form that you have to fill.</div>
        <div className='heading-lines' id='heading-line-3'>Provide the following information to process your application.</div>
      </div>

      {/* <Routes>
      <Route path="/" element={<BasicDetails/>} />
      <Route path="/DocumentCollection" element={<DocumentCollection/>} />
      <Route path="/StatementOfPurpose" element={<StatementOfPurpose/>} />
      <Route path="/InterviewAvailability" element={<InterviewAvailability/>} />
    </Routes> */}
      {displayPage[pageState]}
      { pageState<3? <footer><button className='next-page-btn' onClick={pagechange}>next</button></footer>:<footer><button className='next-page-btn abc' id='submit-form' onClick={(e)=>{
        dispatch(actions.validationHandler4(pageState));
      }}>Submit</button></footer>}
      {/* <button onClick={pagechange}>next</button> */}
    
    </div>
    </div>
  );
}

export default App;
