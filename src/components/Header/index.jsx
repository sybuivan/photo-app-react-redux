import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import './Header.scss'

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.facebook.com/sy.devjp.14/"
              target="_blank"
              rel="noopener noreferrer"
            >
                BuiVanSy
            </a>
          </Col>
          <Col xs="auto" >
              <NavLink
                to="/photos"
                className="header__link header__link--active"
              >
                Redux photo
              </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

Header.propTypes = {};

export default Header;
