import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material"
import image1 from "../assets/img/team-1.jpg"
import { Add } from "@mui/icons-material"
import UserPost from "./UserPost"



const Profile = () => {
  return (
    <Box >

        <Box width="100%">
            <Stack direction="row" gap={5}>
                <Avatar src={image1} sx={{width:150, height:150}}/>

                <Box>
                    <Stack direction="row" gap={3} alignItems="center">
                        <Typography>mayowa.xoxo</Typography>
                        <Button variant="contained" color="primary">Edit Profile</Button>
                    </Stack>
                    <Stack direction="row" gap={3} alignItems="center" mt={3} mb={3} fontWeight={500}>
                        <Typography variant="body2">0 Posts</Typography>
                        <Typography variant="body2">0 followers</Typography>
                        <Typography variant="body2">0 following</Typography>
                    </Stack>
                    <Typography fontWeight={600} textTransform="uppercase">Mayowa Ogungbure</Typography>
                </Box>
            </Stack>

            <Stack direction="row" gap={5} mt={3} mb={3}>
                <Avatar src={image1} sx={{width:60, height:60}}/>
                <Avatar src={image1} sx={{width:60, height:60}}/>
                <Avatar sx={{width:60, height:60}}>
                    <Add/>
                </Avatar>
            </Stack>
            <Divider variant="fullWidth"/>
        </Box>

        <UserPost/>
    </Box >
  )
}

export default Profile
