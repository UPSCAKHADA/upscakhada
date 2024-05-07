"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/hcs/course4.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>HARYANA SPECIFIC CONTENT</h3>
      </div>

      <section className="inner_pages_Section">
        <Container>
        <div className="row mb-4">
              <div className="col-lg-4">
                <Image src={inner} alt="img" className="w-100" />
              </div>
              <div className="col-lg-8">
                <div className="price_Details">
                  <h3></h3>
                  <h4><strong>PRICE</strong> - ₹ 299/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/448445?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              HCS test study material.</p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	NOTES & VIDEOS OF:	</p>
            <p>	1.     HARYANA GOVERNMENT SCHEMES	</p>
            <p>	2.     HARYANA GOVERNMENT BUDGET	</p>
            <p>	3.     HARYANA GOVERNMENT ECONOMIC SURVEY	</p>
            <p>	4.     HARYANA GK BOOK	</p>
            <p>	5.     HARYANA CURRENT AFFAIRS	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
