import React from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../store/HandleInput';
const InterviewAvailability = () => {
    function hello(e){
        e.preventDefault();
        console.log('yo')
    }
    const dispatch=useDispatch();
  return (
    <div className='InterviewAvailability-Container'>

    <div className='InterviewAvailability'>
        <div className='InterAva-div'>
            <label className='in-ava-label'>
                1.Email*
            </label>
            <input className='in-ava-input input-elements sp' type='email' placeholder='Example-userid@gmail.com' onChange={(e)=>{
                dispatch(actions.handleinterviewEmail(e.target.value))

            }}/>
        </div>
        <div className='InterAva-div'>
            <label className='in-ava-label'>
                2.Location
            </label>
            <input className='in-ava-input input-elements' type='text' placeholder='Enter your location' onChange={(e)=>{
                dispatch(actions.handleinterviewLocation(e.target.value))

            }}/>
        </div>
        <div className='InterAva-div'>
            <label className='in-ava-label'>
                3.Interview Date
            </label>
            <input className='in-ava-input dt' type='date' onChange={(e)=>{
                dispatch(actions.handleinterviewDate(e.target.value))

            }}/>
        </div>
        <div className='InterAva-div'>
            <label className='in-ava-label'>
                4.Interview Time
            </label>
            <input className='in-ava-input  dt' type='time' onChange={(e)=>{
                dispatch(actions.handleinterviewTime(e.target.value))

            }}/>
        </div>
        <div className='InterAva-div'>
            <label className='in-ava-label'>
                5.Time Zone
            </label>
            
            <select name="timezone_offset" id="timezone-offset" className="span5 in-ava-input input-elements" defaultValue={'Default'} onChange={(e)=>{
                dispatch(actions.handleinterviewTimeZone(e.target.value))

            }} >
	<option disabled value={'Default'} hidden>Select a Time Zone from below</option>
	<option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
	<option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
	<option value="-10:00">(GMT -10:00) Hawaii</option>
	<option value="-09:50">(GMT -9:30) Taiohae</option>
	<option value="-09:00">(GMT -9:00) Alaska</option>
	<option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
	<option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
	<option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
	<option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
	<option value="-04:50">(GMT -4:30) Caracas</option>
	<option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
	<option value="-03:50">(GMT -3:30) Newfoundland</option>
	<option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
	<option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
	<option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
	<option value="+00:00">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
	<option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
	<option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
	<option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
	<option value="+03:50">(GMT +3:30) Tehran</option>
	<option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
	<option value="+04:50">(GMT +4:30) Kabul</option>
	<option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
	<option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
	<option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
	<option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
	<option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
	<option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
	<option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
	<option value="+08:75">(GMT +8:45) Eucla</option>
	<option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
	<option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
	<option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
	<option value="+10:50">(GMT +10:30) Lord Howe Island</option>
	<option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
	<option value="+11:50">(GMT +11:30) Norfolk Island</option>
	<option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
	<option value="+12:75">(GMT +12:45) Chatham Islands</option>
	<option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
	<option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
</select>
        </div>
        <div className='InterAva-div'>
            <label className='in-ava-label'>
                 6.Interview Medium
            </label>
            <select name="Medium" id="Medium" className='in-ava-input input-elements' defaultValue={'Default-im'} onChange={(e)=>{
                dispatch(actions.handleinterviewMedium(e.target.value))

            }}>
            <option value={'Default-im'} hidden >Select medium of Interview form below</option>
            <option value="EN">English</option>
            <option value="HI">Hindi</option>
            <option value="CH">Chinese</option>
            <option value="SP">Spanish</option>
            </select>
        </div>
    </div>
    {/* <footer> 
    <input type='submit' className='next-page-btn' onClick={hello}/>
    </footer> */}
    </div>
  )
}

export default InterviewAvailability