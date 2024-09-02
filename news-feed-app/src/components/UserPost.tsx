
import imageList from "../assets/img/room-1.jpg"
import imageList2 from "../assets/img/room-2.jpg"
import imageList3 from "../assets/img/room-3.jpg"
import { ImageList, ImageListItem } from "@mui/material"


const UserPost = () => {
  return (
    <div>
      <ImageList cols={3} gap={5}>
          <ImageListItem>
            <img src={imageList} alt="" loading="lazy"/>
          </ImageListItem>
          <ImageListItem>
            <img src={imageList2} alt="" loading="lazy"/>
          </ImageListItem>
          <ImageListItem>
            <img src={imageList3} alt="" loading="lazy"/>
          </ImageListItem>
          <ImageListItem>
            <img src={imageList} alt="" loading="lazy"/>
          </ImageListItem>
          <ImageListItem>
            <img src={imageList2} alt="" loading="lazy"/>
          </ImageListItem>
          <ImageListItem>
            <img src={imageList3} alt="" loading="lazy"/>
          </ImageListItem>
      </ImageList>
    </div>
  )
}

export default UserPost
