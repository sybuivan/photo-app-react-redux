import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../components/Banner'
import PhotoForm from '../../components/PhotoForm'
import './AddEdit.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addPhoto, updatePhoto } from '../../photoSlice'
import { useNavigate, useParams } from 'react-router'

function EditPage(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { photoId} = useParams()
  const isAddPhoto = !photoId
  const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === +photoId))

  console.log(editedPhoto);
  const initialValues = isAddPhoto ? {
    title: '',
    categoryId: null,
    photo: ''
  } : editedPhoto
  const handleOnSubmit = (values) => {
    return new Promise((resolve, reject) =>{
      
      setTimeout(() => {
        if(isAddPhoto) {
          const action = addPhoto(values)
          dispatch(action)
        } else {
          const action = updatePhoto(values)
          dispatch(action)
        }
        navigate('/photos')
        resolve(true)
      }, 2000)

    })
  }


  return (
    <div className="photo-add">
        <Banner title="Pick your amazing photos" />
        
        <div className="photo-add__form">
            <PhotoForm 
              isAddPhoto={isAddPhoto}
              onSubmit={handleOnSubmit}
              formValues={initialValues}  
            />
        </div>
    </div>
  )
}

EditPage.propTypes = {}

export default EditPage
