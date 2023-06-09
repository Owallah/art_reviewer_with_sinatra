import React, { useEffect, useState } from "react";
import avatar from '../../assets/placeholder.jpg'
import { useParams } from "react-router-dom";

const AddArt = () => {

  const params =useParams() 
  console.log(params);

  const url =`http://localhost:9292/artists/${params.id}`
  const [artist, setArtist] = useState([])
  const [title, setTitle] = useState('')
  const [image_url, setImageUrl] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setArtist(data)
    })
  },[])

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) =>  {
    setDescription(e.target.value)
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        fetch('http://localhost:9292/art', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            artist_id: params.id,
            image_url: image_url,
            description: description
          })
        })
        .then(response => response.json())
        .then(data)
        setTitle('')
        setImageUrl('')
        setDescription('')
      };

      const artistItem = (
        <div className="artist_details">
            <img src={artist.avatar_url} alt="avatar" placeholder={avatar} />
            <div className="info">
                <h4>:{artist.name}</h4>
                <p>:{artist.country_of_origin}</p>
            </div>
        </div>
      )

  return (
    <div className="add_art_container">
        {artistItem}
      <div className="add_art">
        <form className="add-art-form" onSubmit={handleSubmit}>
          <label className="add_art_form_label" htmlFor="title">
            Title:
          </label>
          <input
            className="add_art_form_input"
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
            required
          />

          <label className="add_art_form_label" htmlFor="image_url">
            Image URL:
          </label>
          <input
            className="add_art_form_input"
            type="text"
            id="image_url"
            name="image_url"
            onChange={handleImageUrlChange}
            required
          />

          <label className="add_art_form_label" htmlFor="description">
            Description:
          </label>
          <textarea
            className="add_art_form-textarea"
            id="description"
            name="description"
            rows="4"
            onChange={handleDescriptionChange}
            required
          />

          <button className="add_art_form-button" type="submit">
            Add Art
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArt;
