import { ModeNight } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface ItemProps {
    name: { text: string; icon: React.ElementType; path: string }[];
}

const SideBar = ({ name }: ItemProps) => {
    return (
        <Box flex={1} p={2}>
            <Box
                sx={{
                    display: { xs: "none", sm: "none", md: "none", lg: "block" }
                }}
            >
                <Box position="fixed">
                    <List>
                        {name.map((list, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton component={Link} to={list.path}>
                                    <ListItemIcon>
                                        <list.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={list.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#">
                                <ListItemIcon>
                                    <ModeNight />
                                </ListItemIcon>
                                <Switch />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
                <List>
                    {name.map((list, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton component={Link} to={list.path}>
                                <ListItemIcon>
                                    <list.icon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <Switch />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default SideBar;
