import React, { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import '../App.css';

function Memory() {
  const [memories, setMemories] = useState(null)
  const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    
    const [values, setValues] = useState({
        name: '',
        description: '',
        message: ''
    })

    const { id } = useParams()
    const navigate = useNavigate()
    
  const API_BASE = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/api/v1'
    : process.env.REACT_APP_BASE_URL;
  
    let ignore = false;
    useEffect(() => {

    if (!ignore) {
      getMemories();
    }
    return () => {
      ignore = true
    }
  },[])
  
  const getMemories = async () => {
    setLoading(true)
    try {
      await fetch(`${API_BASE}/memories/${id}`)
        .then(res => res.json())
          .then(data => {
              console.log(data)
            //   const { name, class } = data
            setValues({
                name: data.name,
                description: data.description,
                message: data.message
              })
      })
    } catch(error){
      setError(error.message || "unexpected Error")
    } finally {
      setLoading(false)
    }
  }
    
    const deleteMemory = async () => {
        try {
            await fetch(`${API_BASE}/memories/${id}`, {
                method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                  setMemories(data)
                  navigate("/dashboard", { replace: true } )
                  console.log(data)
            })
          } catch(error){
            setError(error.message || "unexpected Error")
          } finally {
            setLoading(false)
          }
        }
    const updateMemory = async () => {
        try {
            await fetch(`${API_BASE}/memories/${id}`, {
                method: 'PATCH',
                Header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
              .then(res => res.json())
              .then(data => {
                 
                  console.log({data})
            })
          } catch(error){
            setError(error.message || "unexpected Error")
          } finally {
            setLoading(false)
          }
        }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        updateMemory();
    }
    
    const handleInputChanges = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }
    
  return (
    <div className="App">
      <header className="App-header">
              <h1>Memory Profile</h1>
              <h2> {values && values.name}</h2>
              <p> {values && values.description}</p>
              <p> {values && values.message}</p>
              <button onClick={() => deleteMemory()}>Delete </button>
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>

              <form className="text-gray-600" onSubmit={(event) => handleSubmit(event)} >
                  <label>
                      Name:
                      <input type="text" name="name" value={values.name} onChange={handleInputChanges}/>
                  </label>
                  <label>
                      Description:
                      <input type="text" name="description" value={values.description} onChange={handleInputChanges}/>
                  </label>
                  <label>
                      Message:
                      <input type="text" name="message" value={values.message} onChange={handleInputChanges}/>
                  </label>
                    <input type="submit" value="submit"/>
              </form>
      </header>
    </div>
  );
}

export default Memory;