import React, { useEffect, useState } from 'react'
import ArtItem from './gallery/ArtItem'

const Gallery = () => {
  const url = 'http://localhost:9292/arts'
  const [arts, setArts] = useState([])

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setArts(data))
  })

  const artItem = arts.map(art => (
    <ArtItem key={art.id} art={art} />
  ))
  return (
    <div className='art_container'>
        {artItem}
    </div>
  )
}

export default Gallery