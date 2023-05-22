import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  name: "",
  dept_name: "",
  total_credit: "",
};

function AddEdit() {
  const [state, setState] = useState(initialState);
  const { id } = useParams();
  const { name, dept_name, total_credit } = state;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);
  
   const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !dept_name || !total_credit) {
      toast.error("Please Provide Values in Each Input Field");
    } else {
      if (!id) {
        axios
          .post("http://localhost:3001/api/post", {
            id,
            name,
            dept_name,
            total_credit,
          })
          .then(() => {
            setState({ id: "", name: "", dept_name: "", total_credit: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Student Added Successfully");
      } else {
        axios
          .put(`http://localhost:3001/api/update/${id}`, {
            id,
            name,
            dept_name,
            total_credit,
          })
          .then(() => {
            setState({ id: "", name: "", dept_name: "", total_credit: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Student updated Successfully");
      }
      setTimeout(() => {
        navigate("/quiz/create");
      }, 500);
    }
  };
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div style={{ paddingTop: "100px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="dept_name">Department Name</label>
          <input
            type="text"
            id="dept_name"
            name="dept_name"
            placeholder="Department Name"
            value={dept_name || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="total_credit">Total Credits</label>
          <input
            type="number"
            id="total_credit"
            name="total_credit"
            placeholder="Total credits"
            value={total_credit || ""}
            onChange={handleInputChange}
          />
          <div className="button-container">
            <input type="submit" value={id ? "Update" : "save"} />
            <Link to="/">
              <input type="button" value="Go Back" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddEdit;
