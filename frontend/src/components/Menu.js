import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {useState} from "react"
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import TodayIcon from '@mui/icons-material/Today';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FlagIcon from '@mui/icons-material/Flag';
import LoopIcon from '@mui/icons-material/Loop';
import CheckIcon from '@mui/icons-material/Check';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    CALENDAR_ROUTE, DEFAULT_ROUTE,
    FRIENDS_ROUTE,
    GOALS_ROUTE,
    HABITS_ROUTE,
    MY_DAY_ROUTE,
    PROFILE_ROUTE, SET_IS_AUTH_ACTION, SET_USER_ACTION,
    TASKS_ROUTE
} from "../utils/consts";
import {useDispatch} from "react-redux";

export const Menu = () => {

    const [open, setOpen] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch({type: SET_IS_AUTH_ACTION, payload: false})
        dispatch({type: SET_USER_ACTION, payload: {}})
        localStorage.setItem('token', '')
        navigate(DEFAULT_ROUTE)
    }

    return (
        <div>
            <React.Fragment>
                <IconButton onClick={() => setOpen(true)}>
                    <AccountCircleOutlinedIcon fontSize={'large'} style={{ color: 'black' }} />
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Box
                        sx={{ width: 300 }}
                        role="presentation"
                        onClick={() => setOpen(false)}
                        onKeyDown={() => setOpen(false)}
                    >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate(PROFILE_ROUTE)}>
                                    <ListItemIcon>
                                        <AccountBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'??????????????'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate(FRIENDS_ROUTE)}>
                                    <ListItemIcon>
                                        <GroupIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'????????????'} secondary={'??????????'} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate(MY_DAY_ROUTE)}>
                                    <ListItemIcon>
                                        <TodayIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'?????? ????????'} secondary={'??????????'}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate(CALENDAR_ROUTE)}>
                                    <ListItemIcon>
                                        <DateRangeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'??????????????????'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate(GOALS_ROUTE)}>
                                    <ListItemIcon>
                                        <FlagIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'????????'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate(HABITS_ROUTE)}>
                                    <ListItemIcon>
                                        <LoopIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'????????????????'} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate(TASKS_ROUTE)}>
                                    <ListItemIcon>
                                        <CheckIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'????????????'} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider />
                        <ListItem sx={{mt: 1}} disablePadding>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <LogoutIcon sx={{ color: '#f44336' }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: '#f44336' }} primary={'??????????'} />
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    )
}