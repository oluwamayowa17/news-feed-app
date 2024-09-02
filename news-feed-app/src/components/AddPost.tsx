import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, ImageList, ImageListItem, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material"
import React, { useState } from "react"
import image1 from "../assets/img/testimonial-1.jpg"



const StyledModal = styled(Modal)({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
})
const UserBox = styled(Box)({
    alignItems: "center",
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
})
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

interface Post {
    onAddPost: (posts: {id: number; name:string; username: string; image: string[]; content: string}) => void
}

const AddPost: React.FC<Post> = ({onAddPost}) => {

    const [open, setOpen] = useState(false)
    const [content, setContent] = useState<string>("")
    const [images, setImages] = useState<string[]>([]);
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFiles = Array.from(event.target.files);
            const newImageUrls = selectedFiles.map(file => URL.createObjectURL(file));
            setImages(prevImages => [...prevImages, ...newImageUrls]);            
        }
    };

    const handlePost = () => {
            const newPost = {
                id: Date.now(),
                name: "Admin",
                username: "admin",
                image: images,
                content,
            }
            onAddPost(newPost)
            setContent('')
            setImages([])
            setOpen(false)
    }


  return (
    <>
      <Tooltip title="Add Post" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
        <Fab color="primary" aria-label="add" onClick={()=>setOpen(true)}>
            <Add/>
        </Fab>
      </Tooltip>

      <StyledModal
      open={open}
      onClose={()=>setOpen(false)}
      aria-label="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box width={400} sx={{maxHeight: "100%"}} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant="h6" color="#999" textAlign="center" >Create Post</Typography>
            <UserBox>
                <Avatar src={image1}/>
                <Typography variant="body1" fontWeight={600}>Admin</Typography>
            </UserBox>
            <TextField
            fullWidth
            id="standard-multiline-static"
            multiline
            rows={3}
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            placeholder="What's on your mind?"
            variant="standard"
            />
            <ImageList cols={3} rowHeight={100} gap={5} sx={{mt: 2, overflow:"hidden"}}>
                {images.map((image, index) => (
                        <ImageListItem key={index}>
                            <img src={image} alt={`Selected ${index}`} loading="lazy" />
                        </ImageListItem>
                    ))}
            </ImageList>

            <Stack direction="row" gap={1} mb={2} mt={2}>
                <IconButton component="label">
                <VisuallyHiddenInput
                    type="image"
                    onChange={(event) => console.log(event.target.value)}
                    multiple
                />
                <EmojiEmotions color="primary"/>

                </IconButton>
                <IconButton component="label">
                <VisuallyHiddenInput
                    type="file"
                    onChange={handleFileChange}
                    multiple
                />
                <Image color="secondary"/>

                </IconButton>
                <IconButton component="label">
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
                <VideoCameraBack color="success"/>

                </IconButton>
                <IconButton component="label">
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
                <PersonAdd color="error"/>

                </IconButton>
            </Stack>
            <ButtonGroup variant="contained" fullWidth>
                <Button onClick={handlePost}>
                    POST
                </Button>
                <Button sx={{width:"100px"}}>
                    <DateRange/>
                </Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default AddPost
