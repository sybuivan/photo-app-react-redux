import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../components/PhotoForm'
import './AddEdit.scss'

function EditPage(props) {
  return (
    <div className="photo-add">
        <Banner title="Pick your amazing photos" />
        
        <div className="photo-add__form">
            <PhotoForm />
        </div>
    </div>
  )
}

EditPage.propTypes = {}

export default EditPage
