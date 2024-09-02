import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import image1 from "../assets/img/team-1.jpg"
import image2 from "../assets/img/team-2.jpg"
import image3 from "../assets/img/team-3.jpg"
import image4 from "../assets/img/team-4.jpg"
import imageList from "../assets/img/room-1.jpg"
import imageList2 from "../assets/img/room-2.jpg"
import imageList3 from "../assets/img/room-3.jpg"

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{
        display: {xs:"none", sm:"none", md:"block"}
        }}>
            <Box width={300}>
                <Typography variant="h6" fontWeight={100} >Online Friends</Typography>

                <AvatarGroup max={7}>
                  <Avatar src={image1}/>
                  <Avatar src={image2}/>
                  <Avatar src={image3}/>
                  <Avatar src={image4}/>
                  <Avatar src=""/>
                  <Avatar src={image2}/>
                  <Avatar src={image3}/>
                  <Avatar src={image4}/>
                  <Avatar src=""/>
                </AvatarGroup>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Recent Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
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

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src={image1}/>
                    </ListItemAvatar>
                    <ListItemText
                    primary="Adebowale John"
                    secondary={

                        <Typography
                          fontWeight={700}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          How are you?
                        </Typography>
                       
                    }
                    />
                  </ListItem>
                  <Divider variant="middle" component="li"/>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src={image3}/>
                    </ListItemAvatar>
                    <ListItemText
                    primary="Peter"
                    secondary={

                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Hey, you called!
                        </Typography>
                       
                    }
                    />
                  </ListItem>
                  <Divider variant="middle" component="li"/>
                </List>

            </Box>
    </Box>
  )
}

export default RightBar
