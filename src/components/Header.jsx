import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../Theme'

const Header = ({title, mini_title, subtitle}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box>
        <Typography
        variant='h2'
        color={colors.grey[100]}
        fontWeight={'bold'}
        sx={{mb: '5px'}}
        >{title}</Typography>

    <Typography
        variant='h3'
        color={colors.grey[100]}
        fontWeight={'bold'}
        sx={{mb: '5px'}}
        >{mini_title}</Typography>

        <Typography 
        variant='h5'
        color={colors.greenAccent[400]}
        >{subtitle}</Typography>
    </Box>
  )
}

export default Header