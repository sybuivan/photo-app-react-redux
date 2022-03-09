import React from "react";
import PropTypes from "prop-types";
import PhotoCard from "../PhotoCard";
import { Col, Row } from "reactstrap";

function PhotoList(props) {
  const { photoList, onPhotoUpdateClick, onPhotoRemoveClick } = props;
  return (
    <Row>
       {photoList.map(photo => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoUpdateClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

export default PhotoList;
