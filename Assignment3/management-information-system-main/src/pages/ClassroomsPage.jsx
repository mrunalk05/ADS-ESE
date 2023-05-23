import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button, Link } from 'react-floating-action-button'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

export default function ClassroomsPage() {

  const [depts, setDepts] = useState([])

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/add-classroom`;
    navigate(path);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/classrooms')
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
      <h3>Classrooms Page</h3>
      <table  className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Building</th>
            <th scope="col">Room Number</th>
            <th scope="col">Capacity</th>
          </tr>
        </thead>
        <tbody>

          {depts.map((ele, ind) => <tr>
            <th key={ind} scope="row">{ind + 1}</th>
            <td>{ele.building}</td>
            <td>{ele.room_number}</td>
            <td>{ele.capacity}</td>
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
