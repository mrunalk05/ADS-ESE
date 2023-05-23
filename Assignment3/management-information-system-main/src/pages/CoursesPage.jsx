import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Button, Link } from 'react-floating-action-button'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

export default function CoursesPage() {

  const [depts, setDepts] = useState([])


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/add-course`;
    navigate(path);
  } 


  useEffect(() => {
    axios.get('http://localhost:8000/api/courses')
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
      <h3>Courses Page</h3>
      <table  className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Credits</th>
            <th scope="col">Department</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>

          {depts.map((ele, ind) => <tr>
            <th key={ind} scope="row">{ind + 1}</th>
            <td>{ele.credits}</td>
            <td>{ele.dept_name}</td>
            <td>{ele.title}</td>
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
