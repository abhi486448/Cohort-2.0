import { createContext, useState } from "react";

export const PostContext = createContext()

export const PostContexProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [Post, setPost] = useState(null)
    const [feed, setFeed] = useState(null)
    const [feedPageNo, setFeedPageNo] = useState(1)
    const [feedLimit, setFeedLimit] = useState(5)
    const [feedHasMore, setFeedHasMore] = useState(false)

    return (
        <PostContext.Provider value={{loading, setLoading, Post, setPost, feed, setFeed, feedPageNo, setFeedPageNo, feedLimit, setFeedLimit, feedHasMore, setFeedHasMore}}>
            {children}
        </PostContext.Provider>
    )
}