import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Nav from '../../shared/components/Nav'

const Feed = () => {
    const {loading, feed, handleFeed, handleLikedPost, handleUnlikedPost } = usePost()

    useEffect(() => {
      handleFeed()
    }, [])

    if(loading || !feed) {
        return (<main><h1>Feed is loading...</h1></main>)
    }

    console.log(feed)
    
    return (
        <main className='feed-page'>
            <Nav />
            <div className="feed">
                <div className="posts">
                    {feed.map(post=>{
                        return <Post key={post._id} user={post.user} post={post} loading={loading} handleLikedPost={handleLikedPost} handleUnlikedPost={handleUnlikedPost} />
                    })}
                </div>
            </div>
        </main>
    )
}

export default Feed