import React from 'react'
import avatar from '../../assets/react.svg'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton } from '@mui/material';

const ArtistItem = ({artist}) => {
  return (
    <div className='artist_item'>
        <img src={artist.avatar_url} alt="avatar" placeholder={avatar} />
        <div id='details'>
            <h4>:{artist.name}</h4>
            <p>:{artist.country_of_origin}</p>
        </div>
        <Link to={`/add-art/${artist.id}`}>
        <IconButton>
            <KeyboardArrowRightIcon/>
        </IconButton>
      </Link>
    </div>
  )
}

export default ArtistItem