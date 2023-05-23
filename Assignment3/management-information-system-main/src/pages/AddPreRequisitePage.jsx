import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';

export default function AddPreRequisitePage() {

    const [theVals, setTheVals] = useState({})
    const [depts, setDepts] = useState([])

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
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/prerequisites', theVals)
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
            <h3>Add Pre-requisite</h3>
            <br />
            <form onSubmit={submitHandler}>
                <label className='form-label' htmlFor="course_id">Course</label><br />

                <select className='form-select' name="course_id" id="course" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts.map((ele, ind)=><option key={ind} value={ele.course_id}>{ele.title}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="prereq_id">Pre-Req</label><br />
                <select className='form-select' name="prereq_id" id="prereq" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts.map((ele, ind)=><option key={ind} value={ele.course_id}>{ele.title}</option>)}
                </select><br /><br />
    
                <button type="submit" className='btn btn-success'>Add</button>
            </form>
        </div>
        </div>
      )
}
