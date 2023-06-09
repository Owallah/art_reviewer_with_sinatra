import { Box } from '@mui/material'
import React from 'react'
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import PaletteIcon from '@mui/icons-material/Palette';

const SideMenu = () => {
    const { collapseSidebar } = useProSidebar()
  return (
    <Box display={'flex'} height={'100vh'}>
    <Sidebar backgroundColor=''>
            <Menu>
                <MenuItem icon={<MenuOutlinedIcon />}
                onClick={()=>{
                    collapseSidebar()
                }}
                >
                </MenuItem>
                <MenuItem icon={<HomeOutlinedIcon/>} component={ <Link to="/" /> }>Home</MenuItem>
                <MenuItem icon={<CollectionsIcon/>} component={ <Link to="/gallery" /> }>Gallery</MenuItem>
                <MenuItem icon={<PaletteIcon/>} component={ <Link to="/artists" /> }>Artists</MenuItem>
                <MenuItem icon={<ContactsOutlinedIcon/>} component={ <Link to="/contact_us" /> }>Contact us</MenuItem>
                <MenuItem icon={<HelpOutlineOutlinedIcon/>} component={ <Link to="/about_us" /> } >About us</MenuItem>

            </Menu>
    </Sidebar>
    </Box>
  )
}

export default SideMenu