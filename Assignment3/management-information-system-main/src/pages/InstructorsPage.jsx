import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button, Link } from 'react-floating-action-button'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

export default function InstructorsPage() {

  const [depts, setDepts] = useState([])

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/add-instructor`;
    navigate(path);
  }
  useEffect(() => {
    axios.get('http://localhost:8000/api/instructors')
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
        <h3>Instructors Page</h3>
        <table  className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>

            {depts.map((ele, ind) => <tr>
              <th key={ind} scope="row">{ind + 1}</th>
              <td>{ele.inst_name}</td>
              <td>{ele.salary}</td>
              <td>{ele.dept_name}</td>
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
