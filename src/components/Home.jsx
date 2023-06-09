import React from 'react'
import background from '../assets/background.jpg'
import Header from './Header'

const Home = () => {
  return (
    <div className='home'>
        <Header title={"ArtVista"} mini_title={'by Johnson'} subtitle={'Art is life'} />
        <div className="home_header">
            <p>I found I could say things with color and shapes that I couldn't say any other way—things I had no words for</p>
            <img id='home_background' src={background} alt="background" />
        </div>
        
    </div>
  )
}

export default Home