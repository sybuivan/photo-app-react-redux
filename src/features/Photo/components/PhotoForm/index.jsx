import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/InputField";
import SelectFiled from "../../../../custom-fields/SelectField";

function PhotoForm(props) {
  const initialValues = {
    title: '',
    category: null
  }
  return (
    <Formik
      initialValues={initialValues}
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
            <FormGroup>
              <Label for="photoId">Photo</Label>
              <div className="mb-2">
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img width="200" height="200" src={Images.VIEW_PT} alt="" />
              </div>
            </FormGroup>

            <FormGroup>
              <Button type="button" outline color="primary">
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
