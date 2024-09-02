import { Logout, Mail, Notifications, PersonAdd, Pets, Settings } from "@mui/icons-material"
import image1 from "../assets/img/testimonial-1.jpg"
import { AppBar, Avatar, Badge, Divider, InputBase, ListItemIcon, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import { useState } from "react"

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})

const Search = styled("div")(({theme})=>({
    background:'#fff',
    width: "40%",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius
}))

const Icons = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "20px"
})

const UserBox = styled("div")({
    display: "none",
    alignItems: "center",
    gap: "20px"
})

const NavBar = () => {
    const [open, setOpen] = useState(false)
    function handleClose(){
        setOpen(false)
    }
  return (
    <AppBar position="sticky" sx={{width: {xs: "calc(100% + 30px)", sm:"100%"}}}>
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>PET SHOP</Typography>
            <Pets sx={{display:{xs:"block", sm:"none"}}}/>
            <Search>
                <InputBase placeholder="search..."/>
            </Search>

            <Icons>
                <Badge badgeContent={3} color="error">
                    <Mail/>
                </Badge>
                <Badge badgeContent={6} color="error">
                    <Notifications />
                </Badge>
                <Avatar src={image1} onClick={()=>setOpen(true)} sx={{width:"30px", height:"30px"}}/>
            </Icons>
            <UserBox>
                <Avatar onClick={()=>setOpen(true)} sx={{width:"30px", height:"30px"}}/>
                <Typography>John Doe</Typography>
            </UserBox>

        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-menu"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right"
        }}
        >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{mr: 2}}/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{mr: 2}}/> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Menu>
    </AppBar>
  )
}

export default NavBar
