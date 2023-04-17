
import React from 'react'
import galleryData from '../utils/ex42/galleryData'
import Gallery from '../components/ex42/Gallery'

function Ex42() {
    console.log(galleryData)
  return (
    <Gallery url ={"http://localhost:5000/gallery"}/>
  )
}

export default Ex42