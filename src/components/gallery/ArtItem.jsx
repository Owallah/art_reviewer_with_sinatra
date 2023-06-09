import React from 'react'
import placeholder from '../../assets/placeholder.jpg'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { IconButton } from '@mui/material';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Link } from 'react-router-dom';

const ArtItem = ({art}) => {
  return (
    <div className='art_item'>
        <img id='art_image' src={art.image_url} alt="placeholder" />
        <h4 id='art_title'>:{art.title}</h4>
        <p id='art_artist'>:{art.artist.name}</p>
        <div className="like_icons">
            <IconButton>
                <ThumbUpOffAltIcon/>
            </IconButton>
            <IconButton>
                <ThumbDownOffAltIcon/>
            </IconButton>

            <Link to={`/arts/${art.id}`}>
            <IconButton>
                <InsertCommentIcon/>
            </IconButton>
            </Link>

        </div>
    </div>
  )
}

export default ArtItem