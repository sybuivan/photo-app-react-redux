import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/InputField";
import SelectFiled from "../../../../custom-fields/SelectField";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";
import * as Yup from 'yup'

function PhotoForm(props) {
  const {formValues, isAddPhoto} = props;

  const initialValues = formValues
  console.log('form value',initialValues);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    categoryId: Yup.number().required('This field is required').nullable(),

    photo: Yup.string().when('category', {
      is: 1,
      then: Yup.string().required('This field is required'),
      otherwise: Yup.string()
    })
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const {values, errors, touched, isSubmitting} = formikProps
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
              name="categoryId"
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
              <Button type="submit" outline color={isAddPhoto ? 'primary' : 'success'}>
                {isSubmitting && <Spinner size="sm"/>}
                {isAddPhoto ? "Add photo" : "Update photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func
};

export default PhotoForm;
