import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button, Link } from 'react-floating-action-button'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

export default function SectionsPage() {

  const [depts, setDepts] = useState([])

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/add-section`;
    navigate(path);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/sections')
      .then((response) => {
        if (response.status === 200) {
          setDepts(response.data);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      <Navbar></Navbar>
      <div className='container container-fluid'>
      <h3>Sections Page</h3>
      <table  className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course</th>
            <th scope="col">Semester</th>
            <th scope="col">Year</th>
            <th scope="col">Classroom Building</th>
            <th scope="col">Classroom Room Number</th>
            <th scope="col">Day</th>
            {/* <th scope="col">Start Time</th>
          <th scope="col">End Time</th> */}
          </tr>
        </thead>
        <tbody>

          {depts.map((ele, ind) => <tr>
            <th key={ind} scope="row">{ind + 1}</th>
            <td>{ele.course_id}</td>
            <td>{ele.semester}</td>
            <td>{ele.year}</td>
            <td>{ele.building}</td>
            <td>{ele.room_number}</td>
            <td>{ele.time_slot_id}</td>
            {/* <td>{ele.timeslot.startTime}</td>
          <td>{ele.timeslot.endTime}</td> */}
          </tr>)}

        </tbody>
      </table>

      <Container>
        <Button
          tooltip="Click here to add prerequisites"
          icon="fa fa-plus"
          rotate={true}
          onClick={routeChange}
        />
      </Container>
    </div>
    </div>
  )
}
