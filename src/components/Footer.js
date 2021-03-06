import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const d = new Date();
const getYear = d.getFullYear();

const Footer = (props) => (
      <Navbar id="footer" className="footer" fixed="bottom" fluid="true" >
        <Row>
          <Col xs={12} md={12}>
            <a href="https://goo.gl/maps/ALo45wVL4SCDRZLG8">
              <span className="address">3141 E Broad Street</span>
              <span className="divider"> | </span>
              <span className="address">Suite. 205</span>
              <span className="divider"> | </span>
              <span className="address">Mansfield, TX 76063</span>
              <span className="divider"> | </span>
            </a>
            <br/>
              <span className="phone">Contact: (682) 518-3100</span>
            <br />
            <span className="copyright">&#169; Copyright {getYear} Icy Blue</span>
            <span className="divider"> | </span>
            <span className="developer">Designed &amp; Maintain by <a href=' https://portfolio-dewi.herokuapp.com/' className="dn" target='_blank'>Dewi Nurdin</a></span>
          </Col>
        </Row>
      </Navbar>
)

export default Footer;

