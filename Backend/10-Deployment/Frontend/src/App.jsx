import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {


  const [notes, setNotes] = useState([
    {
      "title": "title 1",
      "description": "description 1"
    },
    {
      "title": "title 2",
      "description": "description 1"
    },
    {
      "title": "title 2",
      "description": "description 1"
    },
  ])

  function getNotes(){
    axios.get("https://day-10-mohg.onrender.com/api/notes")
    .then(res =>{
      setNotes(res.data.notes)
    })
  }

  useEffect(()=>{
    getNotes()
  },[])

  function handleCreateFun(e){
    e.preventDefault()

    const { title, description} = e.target
    axios.post("https://day-10-mohg.onrender.com/api/notes", {"title": title.value, "description": description.value})
    .then(res =>{
      console.log(res)
      getNotes()
    })
  }

  function handleUpdateDesc(e, id){
    e.preventDefault()

    const {description} = e.target
    
    axios.patch("https://day-10-mohg.onrender.com/api/notes/" + id, {"description": description.value})
    .then(res =>{
      console.log(res)
      getNotes()
    })
  }

  function handleDeleteBTN(id){
    axios.delete("https://day-10-mohg.onrender.com/api/notes/" + id)
    .then(res =>{
      console.log(res)
      getNotes()
    })
  }


  return (
    <>
    <form className='create-note-form' onSubmit={handleCreateFun}>
      <input name='title' type="text" placeholder='enter title' />
      <input name='description' type="text" placeholder='enter desc' />
      <button>create</button>
    </form>

    <div className="notes">
      {notes.map((note)=>{
        return <div className="note">
        <h1>{note.title}</h1>
        <p>{note.description}</p>

        <form className='update-desc-form' onSubmit={ (e) =>{ handleUpdateDesc(e, note._id)}}>
          <input name='description' type="text" placeholder='update desc' />
          <button>update</button>
        </form>

        <button className='delete-btn' onClick={()=>{handleDeleteBTN(note._id)}} >delete</button>
      </div>
      })}
      
    </div>
    </>
  )
}

export default App
