import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router'
import MainPage from './pages/Main'
import EditPage from './pages/AddEdit'
import NotFound from '../../components/NotFound'

function Photo(props) {
  return (
    <div>
        <Routes>
            <Route path="" element={<MainPage />}/>
            <Route path="add" element={<EditPage />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  )
}

Photo.propTypes = {}

export default Photo
