import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { actions } from '../store/HandleInput';
const DocumentCollection = () => {
  const dispatch=useDispatch();
  function filesub1(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handleMarksheet10(myfilename));
      document.querySelector('#myspan1').innerHTML=`${myfilename.slice(0,6)}...attached`;
    }
    function filesub2(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handleMarksheet12(myfilename));
      document.querySelector('#myspan2').innerHTML=`${myfilename.slice(0,6)}...attached`;
    }
    function filesub3(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handleMarksheetgrad(myfilename));
      document.querySelector('#myspan3').innerHTML=`${myfilename.slice(0,6)}...attached`;
    }
    // function filesub4(e){
    //   console.log(e.target.files[0].name);
    //   const myfilename=e.target.files[0].name;
    //   dispatch(actions.handleMarksheetpostgrad(myfilename));
    //   document.querySelector('#myspan4').innerHTML=`${myfilename.slice(0,6)}...attached`;
    // }
    function filesub4(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handleMarksheetpostgrad(myfilename));
      document.querySelector('#myspan4').innerHTML=`${myfilename.slice(0,6)}...attached`;
    }
    function filesub5(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handleofferletter(myfilename));
      document.querySelector('#myspan5').innerHTML=`${myfilename.slice(0,6)}...attached`;
    }
    function filesub6(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handlesalaryslip(myfilename));
      document.querySelector('#myspan6').innerHTML=`${myfilename.slice(0,6)}...attached`;
    }
    function filesub7(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handlebankstatement(myfilename));
      document.querySelector('#myspan7').innerHTML=`${myfilename.slice(0,6)}...attached`;
    }
    function filesub8(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handleincrementletter(myfilename));
      document.querySelector('#myspan8').innerHTML=`${myfilename.slice(0,6)}...attached`;
  }
    function filesub9(e){
      console.log(e.target.files[0].name);
      const myfilename=e.target.files[0].name;
      dispatch(actions.handleothers(myfilename));
      document.querySelector('#myspan9').innerHTML=`${myfilename.slice(0,6)}...attached`;
  }
  return (
    <div className='DocumentCollection-container'>

    <div className='DocumentCollection'>
      <div className='docCollection-conained'>
        <div className='doc-text'>10th Marksheet*</div>
        <label htmlFor="myfileinput" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput" onChange={filesub1} />
        </label>
        <span className='myspan' id='myspan1'></span>
      </div>
      <div className='docCollection-conained'>

        <div className='doc-text'>12th Marksheet*</div>
        <label htmlFor="myfileinput2" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput2" onChange={filesub2} />
        </label>
        <span className='myspan' id='myspan2'></span>
      </div>
      <div className='docCollection-conained'>

        <div className='doc-text'>Graduation Marksheet*</div>
        <label htmlFor="myfileinput3" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput3" onChange={filesub3} />
        </label>
        <span className='myspan' id='myspan3'></span>
      </div>
      {/* <div className='docCollection-conained'>

        <div className='doc-text'>Post Graduation Marksheet</div>
        <label htmlFor="myfileinput4" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput5" onChange={filesub4} />
        </label>
        <span className='myspan' id='myspan4'></span>
      </div> */}
      <div className='docCollection-conained'>
        <div className='doc-text'>Post Graduation Marksheet</div>
        <label htmlFor="myfileinput4" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput4" onChange={filesub4} />
        </label>
        <span className='myspan' id='myspan4'></span>
      </div>
      <div className='docCollection-conained'>
        <div className='doc-text'>Offer Letter*</div>
        <label htmlFor="myfileinput5" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput5" onChange={filesub5} />
        </label>
        <span className='myspan' id='myspan5'></span>
      </div>
      <div className='docCollection-conained'>

        <div className='doc-text'>Salary Slips*</div>
        <label htmlFor="myfileinput6" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput6" onChange={filesub6}/>
        </label>
        <span className='myspan' id='myspan6'></span>
      </div>
      <div className='docCollection-conained'>

        <div className='doc-text'>Bank Statements*</div>
        <label htmlFor="myfileinput7" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput7" onChange={filesub7} />
        </label>
        <span className='myspan' id='myspan7'></span>
      </div>
      <div className='docCollection-conained'>
        <div className='doc-text'>Increment Letter (if any)</div>

        <label htmlFor="myfileinput8" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput8" onChange={filesub8} />
        </label>
        <span className='myspan' id='myspan8'></span>
      </div>
      <div className='docCollection-conained'>
        <div className='doc-text'>Others (if any)</div>

        <label htmlFor="myfileinput8" className='mylabel'>
          Attach file upto 5kb
          <input type="file" name="uploadfile" id="myfileinput8" onChange={filesub9} />
        </label>
        <span className='myspan' id='myspan9'></span>
      </div>
    </div>
    {/* <footer>
    <Link to={'/StatementOfPurpose'}>
    <button className='next-page-btn'>
    NEXT
    </button>
    </Link>
  </footer> */}
    </div>
  )
}

export default DocumentCollection