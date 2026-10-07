import { getFeed, createPost, likePost, unlikePost } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {

    const context = useContext(PostContext)

    const { loading, setLoading, Post, setPost, feed, setFeed, feedPageNo, setFeedPageNo, feedLimit, feedHasMore, setFeedHasMore } = context

    async function handleFeed(feedPageNo, feedLimit = 5) {
        setLoading(true)

        const data = await getFeed(feedPageNo, feedLimit)

        setFeed(prev =>
            Array.from(new Map([...(prev ?? []), ...data.posts].map(item => [item._id, item])).values())
        );

        setFeedHasMore(!!data.next)

        setLoading(false)
    }

    async function handleCreatePost(imageFile, caption) {
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
        handleFeed(feedPageNo)
    }, [feedPageNo])


    return { loading, feed, Post, handleFeed, handleCreatePost, handleLikedPost, handleUnlikedPost , feedHasMore, setFeedPageNo}
}