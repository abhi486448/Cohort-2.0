import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([])

  function fetchNotes(){
    console.log("API Integration")

    axios.get('http://localhost:3000/api/notes')
      .then(res => {
        setNotes(res.data.notes)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e){
    e.preventDefault()

    const {title, description} = e.target.elements

    console.log(title.value, description.value)

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
    .then( res =>{
      console.log(res.data)

      fetchNotes()
    })
  }

  function handleDeleteNote(noteId){
    console.log(noteId)

    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then( res=>{
      console.log(res.data)

      fetchNotes()
    })
  }

  function handleUpdateDesc(e,noteId){
    e.preventDefault()

    const {description} = e.target.elements

    console.log(description.value)
    axios.patch("http://localhost:3000/api/notes/" + noteId, { 
      description: description.value
    })
    .then( res => {
      console.log(res.data)

      fetchNotes()
    })
  }


  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter Title' />
        <input name='description' type="text" placeholder='Enter Description' />
        <button>Create note</button>
      </form>


      <div className="notes">
        {notes.map((note) => {
          return <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button className='delete' onClick={ ()=>{handleDeleteNote(note._id)}}>delete</button>
            <form className='desc-update-form' onSubmit={ e => handleUpdateDesc(e,note._id)}>
              <input name='description' type="text" placeholder='update description' />
              <button>update</button>
            </form>
          </div>
        })}
      </div>

    </>
  )
}

export default App
