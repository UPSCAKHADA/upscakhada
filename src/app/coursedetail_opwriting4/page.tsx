"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/mentorship_answer_writing/course4.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>PUBLIC ADMINISTRATION MENTORSHIP & ANSWER WRITING PROGRAM</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 9,999/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/286727?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
            <p>	50 DAYS DAILY ANSWER WRITING – 2 QUESTIONS DAILY	</p>
            <p>	COPY EVALUATION WITH DETAILED FEEDBACK	</p>
            <p>	MODEL ANSWER	</p>
            <p>	PERSONAL MENTORSHIP	</p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	1.     Everyday (Monday to Saturday) Two questions will uploaded will cover 100 questions in totality. 	</p>
            <p>	2.     Time bound analysis and genuine feedback will be provided. 	</p>
            <p>	3.      Answers will be evaluated within max 1-2 days. 	</p>
            <p>	4.      Expert Feedback with minute details will be given to improve answer writing skills.	</p>
            <p>	5.     One to One Interaction - Once a week there will be mentoring calls where the entire weeks performance will be analysed improvements will be suggested. 	</p>
            <p>	6.     Students are also free to call any day on the prior time given. 	</p>
            <p>	7.     Video call based Mentoring too available if student wants. 	</p>
            <p>	8.      Model answers will be provided which will serve as content enrichment with topical examples and interlinking of topics Which go beyond coaching class notes and traditional text books. 	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
