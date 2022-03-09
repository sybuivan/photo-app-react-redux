import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

function PhotoView(props) {
   const slug = useParams()
   const { id} = slug

   const photos = useSelector(state => state.photos)
   
   const photo = photos.filter(photo => photo.id === Number(id))
   console.log(Object.assign({}, photo));
  return (
    <div>
      <h2>{photo[0].title}</h2>
      <img src={photo[0].photo} alt="" />
    </div>
  )
}

PhotoView.propTypes = {}

export default PhotoView
