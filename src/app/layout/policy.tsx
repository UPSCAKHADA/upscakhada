'use client'

import Link from 'next/link';
import logo from '../images/logo.png';

import { Container, Row, Col } from 'react-bootstrap';
import Image from "next/image";
import { BsInstagram, BsWhatsapp , BsYoutube, BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaArrowCircleRight, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

function Footer() {
 

  return (
    <section className='footer_sec' id="Contact_us">
      <Container>
      <Row className="footer-row">
        <Col lg={4} md={12} className="mb-4">
          <div className="footer_links">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54956.68121680704!2d76.7102977961153!3d30.750835606603495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedf4908fa429%3A0x1967af3e7a35af16!2sUPSC%20Akhada%20-%20Best%20UPSC%20Coaching%20in%20Chandigarh%2C%20IAS%20Coaching%20in%20Chandigarh%2C%20IAS%20Academy!5e0!3m2!1sen!2sin!4v1724073753283!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>

        {/* <Col lg={4} md={6} className="mb-4"> 
          <div className="footer_data">
            <h5>About us</h5>
            <p>
              UPSC Akhada is a platform to gather valuable and relevant
              information on UPSC exam and preparation. Keep yourself motivated
              and prepared.
            </p>
          </div>
        </Col> */}

        <Col lg={5} md={6} className="mb-4">
          <h5>Get In Touch</h5>
          <div className="footer-links">
            <div className="contact_details">
              <BsFillTelephoneFill />
              <h6>CALL US</h6>
              <a href="tel:9310521990"> 9310521990</a>
            </div>

            <div className="contact_details">
              <BsFillEnvelopeFill />
              <h6>MAIL US</h6>
              <a href="mailto:upscakhada@gmail.com"> upscakhada@gmail.com</a>
            </div>
          </div>
        </Col>

        <Col lg={3} md={6} className="mb-4">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <ul>
              <a href="/aboutus">
                <FaArrowCircleRight /> About us
              </a>
            </ul>
            <ul>
              <a href="/courses">
                <FaArrowCircleRight /> All Courses
              </a>
            </ul>
          </ul>
        </Col>
      </Row>
        <div className='copyright'>
            <p>© 2024 Copyright | All Rights Reserved by UPSC AKHADA</p>
            <ul>
              <li><a href='/'>Terms & Conditions</a></li>
              <li><a href='/'>Privacy Policy</a></li>
            </ul>
        </div>
      </Container>

        
         {/* Start Sticky Icon */}
         <div className="sticky-icon">
            <a href='' target='_blank' className='Facebook'><span> <FaFacebookF/></span> Facebook </a>
            <a href='' target='_blank' className='Instagram'><span><BsInstagram/></span> Instagram </a>
            <a href='' target='_blank' className='Telegram'><span><FaTelegramPlane/></span> Telegram </a>
            <a href='' target='_blank' className='Whatsapp'><span><BsWhatsapp/></span> Whatsapp </a>
            <a href='' target='_blank' className='Youtube'><span><BsYoutube/></span> Youtube </a>
        </div>
        {/* End Sticky Icon */}

    </section>
  
  );
}

export default Footer;
