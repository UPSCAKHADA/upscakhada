"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/subject_wise_course_module/course912.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>INTERNATIONAL RELATION</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 999/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/358541?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4><br></br>
            <p>	HOLISTIC COVERAGE OF INTERNATIONAL RELATION IN A SIMPLIFIED MANNER</p>
          <br></br><br></br>
            <h4>Features</h4>
              <p>	1. Complete Coverage of the Subject.	</p>
              <p>	2. Discussion of Previous Year Questions.	</p>
              <p>	3. Prelims MCQs Practice	</p>
              <p>	4. Mains Answer Writing Practice.	</p>
              <p>	5. Current Affairs Updation.	</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
