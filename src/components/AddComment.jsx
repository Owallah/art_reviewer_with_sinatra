import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddComment = () => {
  const params = useParams();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('')
  const [country, setCountry] = useState('')
  const [art, setArt] = useState([]);
  const [viewer, setViewer] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/arts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleProfile = (event) => {
    setProfilePic(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process the review data here, e.g., submit to a server or update state
    console.log("Rating:", rating);
    console.log("Comment:", comment);

    fetch('http://localhost:9292/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            country_of_origin: country,
            profile_pic_url: profilePic
        })
    })
    .then(response => response.json())
    .then(data => {
        setViewer(data)
    })

    console.log(viewer);

    fetch('http://localhost:9292/reviews',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            star_rating: rating,
            comments: comment,
            art_id: params.id,
            viewer_id: viewer.id
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    

    fetch(`http://localhost:9292/arts/${params.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            review_id: viewer.id
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

  };

  const viewArt = (
    <div className="view_art_container">
      <img id="view_art_image" src={art.image_url} alt="art" />
      <h4 id="view_art_title">:{art.title}</h4>
      <p className="view_art_description">:{art.description}</p>
    </div>
  );

  return (
    <div className="view_art">
      {viewArt}

      <div className="add_comment_form">
        <div id="review-form">
          <h2>Add a Review</h2>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`star ${value <= rating ? "filled" : ""}`}
                onClick={() => handleRating(value)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <textarea
            id="comment"
            placeholder="Write your comment here..."
            value={comment}
            onChange={handleComment}
          ></textarea>

          <form>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleName}
            />
            <input
              type="text"
              placeholder="Your Country"
              value={country}
              onChange={handleCountry}
            />
            <input
              type="text"
              placeholder="Your profile link"
              value={profilePic}
              onChange={handleProfile}
            />
          </form>

          <button onClick={handleSubmit}>Submit Review</button>
        </div>
      </div>

      <div className="comments_section">

      </div>
    </div>
  );
};

export default AddComment;
