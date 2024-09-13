import Feed from "./components/Feed"
import SideBar from "./components/SideBar"
import RightBar from "./components/RightBar"
import { Box, Stack } from "@mui/material"
import NavBar from "./components/NavBar"
import { BrowserRouter} from "react-router-dom"
import { AccountBox, Groups, Home, Pages, Person, Settings, Storefront } from "@mui/icons-material"
import AddPost from "./components/AddPost"
import { useState } from "react"

function App() {
    const sideBarList = [
      {
        text: "Homepage",
        icon: Home, 
        path: '/',
      },
      {
        text: "Pages",
        icon: Pages,
        path: '',
      },
      {
        text: "Groups",
        icon: Groups,
        path: '',
      },
      {
        text: "Friends",
        icon: Person,
        path: '',
      },
      {
        text: "Marketplace",
        icon: Storefront,
        path: '',
      },
      {
        text: "Settings",
        icon: Settings,
        path: '',
      },
      {
        text: "Account",
        icon: AccountBox,
        path: 'profile/',
      },
  ]

  interface Post {
    id: number; creator:string; created_on: string; image: string[]; content: string
  }
  const [posts, setPosts] = useState<Post[]>([])

  const handlePost= (newPost: Post)=>{
      setPosts([newPost, ...posts])
  }


  return (
    <BrowserRouter>
    <> 
      <NavBar/>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <SideBar name ={sideBarList}/>
          <Feed posts={posts}/>
          <RightBar/>
        </Stack>
        <AddPost onAddPost={handlePost}/>
      </Box>
    </>
    </BrowserRouter>
  )
}

export default App
