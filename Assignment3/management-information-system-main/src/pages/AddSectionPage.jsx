import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';

export default function AddSectionPage() {


    const [depts, setDepts] = useState([])
    const [depts2, setDepts2] = useState([])
    const [depts3, setDepts3] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/courses')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('http://localhost:8000/api/classrooms')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts2(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('http://localhost:8000/api/timeslots')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts3(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/sections', theVals)
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
            <h3>Add Section</h3>
            <br />
            <form onSubmit={submitHandler}>
                <label className='form-label' htmlFor="semester">Semester</label><br />
                <input className='form-control' value={theVals.semester} onChange={changeHandler} type="text" name="semester" id="semester" required /><br /><br />

                <label className='form-label' htmlFor="year">Year</label><br />
                <input className='form-control' value={theVals.year} onChange={changeHandler} type="text" name="year" id="year" required /><br /><br />

                <label className='form-label' htmlFor="course_id">Course</label><br />
                <select className='form-select' name="course_id" id="course" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts.map((ele, ind)=><option key={ind} value={ele.course_id}>{ele.title}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="building">Building</label><br />
                <select className='form-select' name="building" id="classroom" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts2.map((ele, ind)=><option key={ind} value={ele.building}>{ele.building}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="room_number">room_number</label><br />
                <select className='form-select' name="room_number" id="classroom" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts2.map((ele, ind)=><option key={ind} value={ele.room_number}>{ele.room_number}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="time_slot_id">Time Slot</label><br />
                <select className='form-select' name="time_slot_id" id="timeSlot" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts3.map((ele, ind)=><option key={ind} value={ele.time_slot_id}>{ele.day} {ele.start_time}-{ele.end_time}</option>)}
                </select><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>

            </form>

        </div>
        </div>
      )
}
