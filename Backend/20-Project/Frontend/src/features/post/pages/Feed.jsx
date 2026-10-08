import React, { useCallback, useEffect, useRef } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Nav from '../../shared/components/Nav'

const Feed = () => {
    const {loading, feed, handleFeed, handleLikedPost, handleUnlikedPost, feedHasMore, setFeedPageNo } = usePost()
    
    const observer = useRef()
    const lastPostElementRef = useCallback(node => {
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && feedHasMore){
                setFeedPageNo(prevFeedPageNo => prevFeedPageNo + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [loading, feedHasMore])

    if(!feed) {
        return (<main><h1>Feed is loading...</h1></main>)
    }

    // console.log(feed)
    
    return (
        <main className='feed-page'>
            <Nav />
            <div className="feed">
                <div className="posts">
                    {feed.map((post, index)=>{
                        if(feed.length === index +1){
                            return <Post ref={lastPostElementRef} key={post._id} user={post.user} post={post} loading={loading} handleLikedPost={handleLikedPost} handleUnlikedPost={handleUnlikedPost} />
                        } else{
                            return <Post key={post._id} user={post.user} post={post} loading={loading} handleLikedPost={handleLikedPost} handleUnlikedPost={handleUnlikedPost} />
                        }
                    })}
                    <div className='loading'>{loading && "Loading..."}</div>
                </div>
            </div>
        </main>
    )
}

export default Feed