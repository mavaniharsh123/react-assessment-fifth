import React, { useState, createContext } from "react";
export const ContextAPI = createContext();

export const Studentdata = (props) => {
  const [rows, setRows] = useState([
    { id: "1", name: "Jack", age: 25, course: "MERN", batch: "January"},
    { id: "2", name: "Sparrow", age: 26, course: "MERN", batch: "March"},
    { id: "3", name: "James", age: 21, course: "MERN", batch: "May"},
    { id: "4", name: "Bond", age: 22, course: "MERN", batch: "June"},
  ])
  return (
    <ContextAPI.Provider value={[rows, setRows]}>
      {props.children}
    </ContextAPI.Provider>
  )
}

export default Studentdata
