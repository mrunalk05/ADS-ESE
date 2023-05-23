import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';

export default function AddStudentPage() {

    const [theVals, setTheVals] = useState({})
    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/departments')
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
        axios.post('http://localhost:8000/api/students', theVals)
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
        <div className='container container-fluid text-center'>
        <h3>Add Student</h3>
        <br />
        <form onSubmit={submitHandler}>
            <label className='form-label' htmlFor="name">Name</label><br />
            <input className='form-control' value={theVals.name} onChange={changeHandler} type="text" name="name" id="name" required /><br /><br />
            
            <label className='form-label' htmlFor="credits">Credits</label><br />
            <input className='form-control' value={theVals.credits} onChange={changeHandler} type="text" name="tot_cred" id="credits" required /><br /><br />

            <label className='form-label' htmlFor="department">Department</label><br />
            <select className='form-select' name="dept_name" id="department" onChange={changeHandler}>
            <option value={-1}>Select</option>
                {depts.map((ele, ind)=><option key={ind} value={ele.id}>{ele.dept_name}</option>)}
            </select><br /><br />

            <button type="submit" className='btn btn-success'>Add</button>
        </form>
    </div>
    </div>
  )
}
