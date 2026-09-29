import { getFeet } from "../services/post.api";
import { useContext } from "react";
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

    return { loading, feed, Post, handleFeed }
}