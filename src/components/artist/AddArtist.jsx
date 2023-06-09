import React, { useState } from 'react'

const AddArtist = () => {

    const url = 'http://localhost:9292/artists'
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [avatar, setAvatar] = useState('');
    // console.log(params.id);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
    };
  
    const handleAvatarChange = (e) => {
      setAvatar(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any necessary form validation or API calls here
      fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            country_of_origin: country,
            avatar_url: avatar
        })
      })
      .then(response => response.json())
      // .then(data => setArtists(data))
      console.log('Artist name:', name);
      console.log('Artist country:', country);
      console.log('Artist avatar URL:', avatar);
      // Reset form fields
      setName('');
      setCountry('');
      setAvatar('');
    };

  return (
    <form className='add_artist_form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={handleCountryChange}
          required
        />
      </div>
      <div>
        <label htmlFor="avatar">Avatar URL:</label>
        <input
          type="text"
          id="avatar"
          value={avatar}
          onChange={handleAvatarChange}
          required
        />
      </div>
      <button type="submit">Create Artist</button>
    </form>
  )
}

export default AddArtist