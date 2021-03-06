import React from "react";
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContextAPI } from "./ContextAPI";

const UpdateStudents = () => {
  let navigate = useNavigate();
  const [rows, setRows] = useContext(ContextAPI);
  const { id } = useParams();
  const [details, setDetails] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
    batch: "",
  });

  useEffect(() => {
    rows.forEach((item) => {
      if (item.id === id) {
        setDetails({
          name: item.name,
          age: item.age,
          course: item.course,
          batch: item.batch,
        });
      }
    });
  }, [id,rows]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.name ==='') {
      alert("Name is Required");
    }
    else{
      if (id === undefined) {
        let newDetails = { ...details, id: new Date().getTime().toString() };
        setRows([...rows, newDetails]);
      } else {
        setRows((prevState) =>
          prevState.map((student) =>
            student.id === id
              ? {
                  id: id,
                  name: details.name,
                  age: details.age,
                  course: details.course,
                  batch: details.batch,
                }
              : student
          )
        );
      }
    } 
    navigate("/students");
  };

  return (
    <div className="details">
      <form action="" onSubmit={handleSubmit}>
        <fieldset className="field1">
          <legend>Name:</legend>
          <input
            type="text"
            id="name"
            name="name"
            value={details.name}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <fieldset className="field2">
          <legend>Age:</legend>
          <input
            type="number"
            id="age"
            name="age"
            value={details.age}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <fieldset className="field3">
          <legend>Course:</legend>
          <input
            type="text"
            id="course"
            name="course"
            value={details.course}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <fieldset className="field4">
          <legend>Department:</legend>
          <input
            type="text"
            id="batch"
            name="batch"
            value={details.batch}
            onChange={handleChange}
          />
          <br />
        </fieldset>
        <Link to="/students">
          <button className="back-btn">Go Back</button>
        </Link>
        <button type="submit" className="update-btn">Update</button>
      </form>
    </div>
  );
};

export default UpdateStudents;
