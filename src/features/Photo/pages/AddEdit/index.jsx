import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../components/PhotoForm'
import './AddEdit.scss'
import { useDispatch } from 'react-redux'
import { addPhoto } from '../../photoSlice'
import { useNavigate } from 'react-router'

function EditPage(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnSubmit = (values) => {
    return new Promise((resolve, reject) =>{
      
      setTimeout(() => {
        const action = addPhoto(values)
        dispatch(action)
        
        navigate('/photos')
        resolve(true)
      }, 2000)

    })
  }
  return (
    <div className="photo-add">
        <Banner title="Pick your amazing photos" />
        
        <div className="photo-add__form">
            <PhotoForm onSubmit={handleOnSubmit}/>
        </div>
    </div>
  )
}

EditPage.propTypes = {}

export default EditPage
