import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button, Link } from 'react-floating-action-button'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

export default function TimeslotsPage() {


  const [depts, setDepts] = useState([])


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/add-timeslot`;
    navigate(path);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/timeslots')
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
      <h3>Timeslots Page</h3>
      <table  className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Day</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
          </tr>
        </thead>
        <tbody>

          {depts.map((ele, ind) => <tr>
            <th key={ind} scope="row">{ind + 1}</th>
            <td>{ele.day}</td>
            <td>{ele.start_time}</td>
            <td>{ele.end_time}</td>
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
