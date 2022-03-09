import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../photoSlice";
import { useNavigate } from "react-router-dom"

function MainPage(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const photos = useSelector((state) => state.photos);
  // console.log("List photo: ", photos);

  const handlePhotoRemoveClick = (photo) => {
    console.log('Photo removePhoto', photo);
    const action = removePhoto(photo.id)
    dispatch(action);
  };

  const handlePhotoUpdateClick = (photo) => {
    console.log("Edit Photo", photo);
    const editPhotoUrl = `/photos/${photo.id}`
    navigate(editPhotoUrl)
  }
  return (
    <div>
      <Banner title="Your awesome a photos" backgroundUrl={Images.PHONE_BK} />
      <Container className="text-center">
        <Link to="/photos/add">Go to add new photo</Link>
        <PhotoList
          photoList={photos}
          onPhotoRemoveClick={handlePhotoRemoveClick}
          onPhotoUpdateClick={handlePhotoUpdateClick}
        />
      </Container>
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
