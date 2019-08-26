import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const d = new Date();
const getYear = d.getFullYear();

const Footer = (props) => (
      <Navbar className="footer" id="footer" fixed="bottom">
        <Row>
          <Col xs={12} md={12}>
            <span className="address">3141 E Broad Street</span>
            <span className="divider"> | </span>
            <span className="address">Suite. 205</span>
            <span className="divider"> | </span>
            <span className="address">Mansfield, TX 76063</span>
            <span className="divider"> | </span>
            <span className="phone">Call us: 817-888-8888</span>
            <br />
            <span className="copyright">© Copyright {getYear} Icy Blue</span>
            <span className="divider"> | </span>
            <span className="developer">Designed & Maintain by <a href=' https://portfolio-dewi.herokuapp.com/' target='_blank'>Dewi Nurdin</a></span>
          </Col>
        </Row>
      </Navbar>
)

export default Footer;

