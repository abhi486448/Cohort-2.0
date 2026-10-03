import React,{useState, useRef} from 'react'
import "../style/createpost.scss"
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router'

const CreatePost = () => {

  const { loading, handleCreatePost } = usePost()
  const navigate = useNavigate()

  const [caption, setCaption] = useState("")
  const postImageInputFileRef = useRef(null)


  const handleSubmit = async (e)=> {
    e.preventDefault()
    const file = postImageInputFileRef.current.files[0]
    await handleCreatePost(file, caption)
    navigate("/feed")
  }

  if(loading){
    return (
      <main>
        <h1>Creating Post ...</h1>
      </main>
    )
  }

  return (
    <main className='create-post-page'>
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label className='post-image-lable' htmlFor="postImage">Select Image</label>
                <input ref={postImageInputFileRef} hidden type="file" name='postImage' id='postImage' />
                
                <input
                 onInput={(e)=> {setCaption(e.target.value)}}
                 value={caption}
                 type="text" 
                 name='caption' 
                 id='caption'/>
                <button className='button primery-button' >Create</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost