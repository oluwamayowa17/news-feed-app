
import { Box } from "@mui/material";
import Post from "./Post";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";


interface PostProps {
  posts: {id: number; name:string; username: string; image: string[]; content: string}[]
}

const Feed = ({posts}: PostProps) => {
  
  
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
