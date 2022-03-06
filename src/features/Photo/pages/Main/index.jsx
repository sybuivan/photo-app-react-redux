import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

function MainPage(props) {
  console.log(Images);
  return (
    <div>
      <Banner title="Your awesome a photos" backgroundUrl={Images.DIGTAL_BK} />
      <Container className="text-center">
        <Link to="/photos/add">Go to add new photo</Link>
      </Container>
    </div>
  );
}

MainPage.propTypes = {};

export default MainPage;
