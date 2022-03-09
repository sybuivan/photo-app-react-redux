import React from "react";
import PropTypes from "prop-types";
import "./PhotoCard.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function PhotoCard(props) {
  const { photo, onRemoveClick, onEditClick } = props;
  // console.log(photo);
  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(photo);
  };
  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </div>

          <div>
            <Button outline size="sm" color="primary">
              <Link to={`details/${photo.id}`} className="photo__actions-link">
                View
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

PhotoCard.propTypes = {
  photo: PropTypes.object,
};

export default PhotoCard;
