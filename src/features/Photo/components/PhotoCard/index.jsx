import React from 'react'
import PropTypes from 'prop-types'

function PhotoCard(props) {
  return (
    <div className="photo-card">
      
    </div>
  )
}

PhotoCard.propTypes = {
   imageUrl: PropTypes.string,
   title: PropTypes.string,
   category: PropTypes.string
}

export default PhotoCard
