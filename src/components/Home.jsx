import React from 'react'
import background from '../assets/background.jpg'
import Header from './Header'

const Home = () => {
  return (
    <div className='home'>
        <Header title={"JOHNSON'S"} mini_title={'GALLERY'} subtitle={'Art is life'} />
        <div className="home_header">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, amet magnam autem eos itaque numquam cumque corporis quidem labore facere fugit quos nulla qui saepe quia commodi non, eius laborum?</p>
            <img id='home_background' src={background} alt="background" />
        </div>
        
    </div>
  )
}

export default Home