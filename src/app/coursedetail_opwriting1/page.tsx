"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/mentorship_answer_writing/course1.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>DISHA- PSYCHOLOGY OPTIONAL MENTORSHIP PROGRAM & ANSWER WRITING </h3>
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
                  <h4><strong>PRICE</strong> - ₹ 20,000/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/211279?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              Psychology optional mentorship program & answer writing for psychology subject which generally get highest number of selections.</p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	1. It is a foundation style course but not a classroom program. It is based on mentorship model	</p>
            <p>	2. It works on the premise of weekly chapter wise targets. After Completing the target, we discuss topics and analyse notes.	</p>
            <p>	3. End goal is note making of every topic of syllabus and answer writing.	</p>
            <p>	4. Chapter wise test after completing it.	</p>
            <p>	5. Duration is 90 -120 days (Flexible)	</p>
            <p>	6. Linking of topics with Current affairs to be established.	</p>
            <p>	7. Content selection and also focusing what not to study.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
