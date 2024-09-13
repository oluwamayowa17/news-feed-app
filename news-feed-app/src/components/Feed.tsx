
import { Box } from "@mui/material";
import Post from "./Post";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

interface PostProps {
  posts: {id: number; creator:string; created_on: string; image: string[]; content: string}[]
}
//{posts}: PostProps

const Feed: React.FC<PostProps> = () => {
  const [posts, setPosts] = useState([]) 

  async function getPosts(){
    try{
      const response = await fetch('http://127.0.0.1:8000/api/posts/')
      const data = await response.json()
      
      console.log(data)
      setPosts(data)
    }
    catch(error){
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  
  return (
    <Box flex={4} p={2}>
      <Routes>
        <Route index element={<Post posts={posts}/>}/>
        <Route path='profile/' element={<Profile/>}/>
      </Routes>
      
      
      
    </Box >
  )
}

export default Feed
