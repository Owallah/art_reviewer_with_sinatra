import React, { useContext } from 'react'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../Theme';

const TopBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
        
        <Box display='flex' backgroundColor = {colors.primary[400]} borderRadius={'3px'}>
            <InputBase sx={{ml: 2, flex:1}} placeholder='Search here...' />
            <IconButton type='button' sx={{p: 1}}>
                <SearchOutlinedIcon />
            </IconButton>
        </Box>

        <Box display={'flex'}>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon/>
                ) : (<LightModeOutlinedIcon/>)}
            </IconButton>

            <IconButton>
            <NotificationsOutlinedIcon />
            </IconButton>
        </Box>
    </Box>
  )
}

export default TopBar