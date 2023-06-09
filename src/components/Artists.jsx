import React, { useEffect, useState } from 'react'
import ArtistItem from './artist/ArtistItem'
import AddArtist from './artist/AddArtist'
import { Link } from 'react-router-dom'

const Artists = () => {

  const url = 'http://localhost:9292/artists'
  const [artists, setArtists] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setArtists(data))
  }, [])

  const artist = artists.map(artist => (
    // <Link className='artist_card' to={`/add-art/${artist.id}`}>
    <ArtistItem key={artist.id} artist={artist} />
    // </Link>
  ))

  return (
    <div className='artist_page'>
      <div className="content_container">
        <div className='add_artist'>
          <AddArtist setArtists={setArtists} />
        </div>

        <div className='artists_container'>
          {artist}
        </div>

      </div>
      

    </div>
  )
}

export default Artists