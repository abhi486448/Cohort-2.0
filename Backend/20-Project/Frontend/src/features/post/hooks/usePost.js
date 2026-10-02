import { getFeet, createPost, likePost, unlikePost } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
    
    const context = useContext(PostContext)

    const { loading, setLoading, Post, setPost, feed, setFeed } = context

    async function handleFeed(){
        setLoading(true)

        const data = await getFeet()

        setFeed(data.posts)

        setLoading(false)
    }

    async function handleCreatePost(imageFile, caption){
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...feed])
        setLoading(false)
    }

    const handleLikedPost = async (post) => {
        const data = await likePost(post)
        await handleFeed()
    }

    const handleUnlikedPost = async (post) => {
        const data = await unlikePost(post)
        await handleFeed()
    }

    useEffect(() => {
      handleFeed()
    }, [])
    

    return { loading, feed, Post, handleFeed, handleCreatePost, handleLikedPost, handleUnlikedPost }
}