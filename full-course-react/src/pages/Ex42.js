
import React from 'react'
import Gallery from '../components/ex42/Gallery'

function Ex42() {
    // execute npm run gallery-data to setup the server for the images;
  return (
    <Gallery url ={"http://localhost:5000/gallery"}/>
  )
}

export default Ex42