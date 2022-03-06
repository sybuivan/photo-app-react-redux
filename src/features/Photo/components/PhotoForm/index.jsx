import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/InputField";
import SelectFiled from "../../../../custom-fields/SelectField";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";
import * as Yup from 'yup'

function PhotoForm(props) {
  const initialValues = {
    title: '',
    category: null,
    photo: ''
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    category: Yup.number().required('This field is required').nullable(),

    photo: Yup.string().when('category', {
      is: 1,
      then: Yup.string().required('This field is required'),
      otherwise: Yup.string()
    })
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Form submit", values)}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const {values, errors, touched} = formikProps
        console.log({values, errors, touched})
        return (
          <Form>
            <FastField 
              name="title"
              component={InputField}

              placeholder="Title"
              label="Title"
            />

            <FastField 
              name="category"
              component={SelectFiled}

              placeholder="What your photo category?"
              label="Category"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            
            <FastField 
              name="photo"
              component={RandomPhotoField}

              label="Photo"
            />

            <FormGroup>
              <Button type="submit" outline color="primary">
                Add Photo
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

PhotoForm.propTypes = {};

export default PhotoForm;
