import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';

export default function AddTimeslotPage() {

    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/timeslots', theVals)
        .then((response)=>{
            alert("Added Successfully!")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const changeHandler = (event) => {
        setTheVals({...theVals, [event.target.name]: event.target.value})
    }

    return (
       <div>
           <Navbar></Navbar>
           <div className='container container-fluid text-center   '  >
            <h3>Add Timeslot</h3>
            <br />
            <form onSubmit={submitHandler}>
            <label className='form-label' htmlFor="day">Day</label><br />
            <input className='form-control' value={theVals.day} onChange={changeHandler} type="text" name="day" id="day" required /><br /><br />

            <label className='form-label' htmlFor="start_time">Start Time</label><br />
            <input className='form-control' value={theVals.startTime} onChange={changeHandler} type="text" name="start_time" id="startTime" required /><br /><br />

            <label className='form-label' htmlFor="end_time">End Time</label><br />
            <input className='form-control' value={theVals.endTime} onChange={changeHandler} type="text" name="end_time" id="endTime" required /><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>
            </form>
        </div>
       </div>
      )
}
