import React, { useEffect, useState } from "react";
import "./Table.css";
import axios, { all } from 'axios'
import { useLoaderData, useLocation } from "react-router-dom";

const Dashboard = () => {
  // const [isFetching,setFetched] = useState(false);
  const [alldata, setAlldata] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setID] = useState("")
  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")


  const [lastname, setLastname] = useState("")

  const fetch = async () => {
    const gettoken = localStorage.getItem("authtoken")
    try {
      const response = await axios.get('http://localhost:3000/api/get/users',{
        headers:{
          Authorization:`Bearer ${gettoken}`
        }
      })
    console.log('-------------->',response)
      const data = response.data.data.map((items) => ({
        id: items.id,
        firstname: items.firstName,
        lastname: items.lastName,
        email: items.email,
        role: items.role
      }))
      console.log(response.data.data)
      //   setFetched(false);
      setAlldata(data);
    }

    catch (err) {
      console.log(err)
    }
  }
  const handleDelete = async (id, e) => {
    const gettoken = localStorage.getItem("authtoken")
    try {
      e.preventDefault()
      const response = await axios.delete(`http://localhost:3000/api/delete2/${id}`)
      console.log(response),
      {
        headers: {
          Authorization: `Bearer ${gettoken}`
        }
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  const handleUpdate = async () => {
    const gettoken = localStorage.getItem("authtoken")
    try {

      const response = await axios.put(`http://localhost:3000/api/update/${id}`, {

        firstName: firstname,
        lastName: lastname,
        email: email,
        role: 'user'
      },
        {
          headers: {
            Authorization: `Bearer ${gettoken}`
          }
        }
      )

      fetch()
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetch();

  }, [])
  return (
    <div>



      <table>
        <thead>
          <tr key={"header"}>

            <th>id</th>
            <th>firstName</th>
            <th>lastname</th>
            <th>email</th>
            <th>role</th>
            <th>Delete</th>
            <th>Edit users</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((key, index) => (
            <tr key={index}>
              <td>{key.id}
              </td>
              <td>{key.firstname}</td>
              <td>{key.lastname}</td>
              <td>{key.email}</td>
              <td>{key.role}</td>
              <td><button onClick={(e) => { handleDelete(key.id, e) }}>Delete</button></td>
              <td><button onClick={(
              ) => {
                setEdit(true)
                setID(key.id)
              }

              }>edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {edit === true ?
        <div>

          <input
            onChange={(e) => { setFirstname(e.target.value) }}
            type="text"
            id="Firstname"
            name="Firstname"
            placeholder="Firstname"
          />
          <input
            onChange={(e) => { setLastname(e.target.value) }}
            type="text"
            id="Lastname"
            name="Lastname"
            placeholder="Lastname"
          />
          <input
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            id="Firstname"
            name="Firstname"
            placeholder="email"
          />
          <button onClick={handleUpdate}>update</button>
        </div> :
        <div></div>

      }


    </div>
  );
}
export default Dashboard